import type { 
  FolioContent, 
  ParsedManifest,
} from "./types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IIIFManifestAny = any

/**
 * Extract a string value from a IIIF localized string (handles both v2 and v3)
 */
function getLocalizedValue(value: unknown): string {
  if (!value) return ""
  if (typeof value === "string") return value
  
  // v3 format: {"en": ["text"]}
  if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, string[]>
    const languages = ["en", "fr", "none", "und", "@none"]
    for (const lang of languages) {
      if (obj[lang]?.length) {
        return obj[lang][0]
      }
    }
    
    // Return first available value
    const firstKey = Object.keys(obj)[0]
    if (firstKey && obj[firstKey]?.length) {
      return obj[firstKey][0]
    }
  }
  
  return String(value)
}

/**
 * Get image URL from a canvas (handles both IIIF v2 and v3)
 */
function getImageFromCanvas(canvas: IIIFManifestAny): { 
  imageUrl: string
  imageServiceUrl?: string
  width?: number
  height?: number 
} {
  // IIIF v3: items[0].items[0].body
  if (canvas.items?.[0]?.items?.[0]?.body) {
    const body = canvas.items[0].items[0].body
    const service = body.service?.[0]
    const serviceUrl = service?.id || service?.["@id"]
    return {
      imageUrl: serviceUrl ? `${serviceUrl}/full/1000,/0/default.jpg` : body.id,
      imageServiceUrl: serviceUrl,
      width: body.width || canvas.width,
      height: body.height || canvas.height,
    }
  }
  
  // IIIF v2: images[0].resource
  if (canvas.images?.[0]?.resource) {
    const resource = canvas.images[0].resource
    const service = resource.service
    const serviceUrl = service?.["@id"] || service?.id
    
    if (serviceUrl) {
      return {
        imageUrl: `${serviceUrl}/full/1000,/0/default.jpg`,
        imageServiceUrl: serviceUrl,
        width: resource.width || canvas.width,
        height: resource.height || canvas.height,
      }
    }
    
    return {
      imageUrl: resource["@id"] || resource.id || "",
      width: resource.width || canvas.width,
      height: resource.height || canvas.height,
    }
  }
  
  return { imageUrl: "" }
}

/**
 * Fetch annotation list content from FromThePage
 */
async function fetchAnnotationList(url: string): Promise<string> {
  try {
    const isClient = typeof window !== "undefined"
    const fetchUrl = isClient 
      ? `/api/iiif-proxy?url=${encodeURIComponent(url)}`
      : url
    
    const response = await fetch(fetchUrl, {
      headers: isClient ? {} : {
        Accept: "application/ld+json, application/json",
      },
    })
    
    if (!response.ok) return ""
    
    const data = await response.json()
    
    // Extract text from annotation resources
    const resources = data.resources || data.items || []
    const textParts: string[] = []
    
    for (const resource of resources) {
      const body = resource.resource || resource.body
      if (body) {
        const text = body.chars || body.value || ""
        if (text) {
          textParts.push(text)
        }
      }
    }
    
    return textParts.join("\n\n")
  } catch (error) {
    console.error("[v0] Failed to fetch annotation list:", url, error)
    return ""
  }
}

/**
 * Parse a single canvas into FolioContent
 */
async function parseCanvasWithAnnotations(
  canvas: IIIFManifestAny, 
  index: number
): Promise<FolioContent> {
  const { imageUrl, imageServiceUrl, width, height } = getImageFromCanvas(canvas)
  
  let transcription: string | undefined
  let translation: string | undefined
  
  // Check for otherContent (IIIF v2 annotation lists used by FromThePage)
  const otherContent = canvas.otherContent || []
  
  for (const content of otherContent) {
    const label = getLocalizedValue(content.label)?.toLowerCase() || ""
    const contentId = content["@id"] || content.id
    
    if (!contentId) continue
    
    if (label.includes("transcription") || label === "transcription") {
      transcription = await fetchAnnotationList(contentId)
    } else if (label.includes("translation") || label === "translation") {
      translation = await fetchAnnotationList(contentId)
    }
  }
  
  // Also check seeAlso for HTML transcription/translation
  const seeAlso = canvas.seeAlso || []
  for (const item of seeAlso) {
    const label = getLocalizedValue(item.label)?.toLowerCase() || ""
    const itemId = item["@id"] || item.id
    
    if (!itemId) continue
    
    // Only fetch if we don't have the content yet
    if (!transcription && (label.includes("html transcription") || label === "transcription")) {
      try {
        const isClient = typeof window !== "undefined"
        const fetchUrl = isClient 
          ? `/api/iiif-proxy?url=${encodeURIComponent(itemId)}`
          : itemId
        
        const response = await fetch(fetchUrl)
        if (response.ok) {
          transcription = await response.text()
        }
      } catch {
        // Ignore errors
      }
    } else if (!translation && (label.includes("html translation") || label === "translation")) {
      try {
        const isClient = typeof window !== "undefined"
        const fetchUrl = isClient 
          ? `/api/iiif-proxy?url=${encodeURIComponent(itemId)}`
          : itemId
        
        const response = await fetch(fetchUrl)
        if (response.ok) {
          translation = await response.text()
        }
      } catch {
        // Ignore errors
      }
    }
  }
  
  return {
    canvasId: canvas["@id"] || canvas.id,
    label: getLocalizedValue(canvas.label) || `Folio ${index + 1}`,
    imageUrl,
    imageServiceUrl,
    transcription,
    translation,
    width: width || canvas.width || 1000,
    height: height || canvas.height || 1000,
  }
}

/**
 * Parse metadata from IIIF manifest
 */
function parseMetadata(manifest: IIIFManifestAny): Record<string, string> {
  const result: Record<string, string> = {}
  
  const metadata = manifest.metadata || []
  
  for (const item of metadata) {
    const label = getLocalizedValue(item.label)
    const value = getLocalizedValue(item.value)
    if (label && value) {
      result[label] = value
    }
  }
  
  return result
}

/**
 * Get canvases from manifest (handles both IIIF v2 and v3)
 */
function getCanvases(manifest: IIIFManifestAny): IIIFManifestAny[] {
  // IIIF v3: items array directly on manifest
  if (manifest.items?.length) {
    return manifest.items
  }
  
  // IIIF v2: sequences[0].canvases
  if (manifest.sequences?.[0]?.canvases?.length) {
    return manifest.sequences[0].canvases
  }
  
  return []
}

/**
 * Fetch and parse a IIIF manifest
 * Uses a proxy API route to avoid CORS issues when fetching from the browser
 */
export async function fetchManifest(
  url: string,
  canvasFilter?: { start: number; end: number }
): Promise<ParsedManifest> {
  // Use proxy API to avoid CORS issues on client-side
  const isClient = typeof window !== "undefined"
  const fetchUrl = isClient 
    ? `/api/iiif-proxy?url=${encodeURIComponent(url)}`
    : url
  
  const response = await fetch(fetchUrl, {
    headers: isClient ? {} : {
      Accept: "application/ld+json, application/json",
    },
    ...(isClient ? {} : { next: { revalidate: 3600 } }), // Cache for 1 hour (server only)
  })
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `Failed to fetch manifest: ${response.status} ${response.statusText}`)
  }
  
  const manifest = await response.json() as IIIFManifestAny
  
  let canvases = getCanvases(manifest)
  
  // Apply canvas filter if specified (1-indexed)
  if (canvasFilter) {
    canvases = canvases.slice(canvasFilter.start - 1, canvasFilter.end)
  }
  
  // Parse canvases with their annotations
  const folios = await Promise.all(
    canvases.map((canvas, index) => parseCanvasWithAnnotations(canvas, index))
  )
  
  return {
    id: manifest["@id"] || manifest.id,
    label: getLocalizedValue(manifest.label),
    metadata: parseMetadata(manifest),
    folios,
  }
}

/**
 * Fetch annotations separately (for FromThePage which may have separate annotation lists)
 */
export async function fetchAnnotations(annotationListUrl: string): Promise<{
  transcription?: string
  translation?: string
}> {
  try {
    // Use proxy API to avoid CORS issues on client-side
    const isClient = typeof window !== "undefined"
    const fetchUrl = isClient 
      ? `/api/iiif-proxy?url=${encodeURIComponent(annotationListUrl)}`
      : annotationListUrl
    
    const response = await fetch(fetchUrl, {
      headers: isClient ? {} : {
        Accept: "application/ld+json, application/json",
      },
      ...(isClient ? {} : { next: { revalidate: 3600 } }),
    })
    
    if (!response.ok) return {}
    
    const data = await response.json()
    const result: { transcription?: string; translation?: string } = {}
    
    const items = data.items || data.resources || []
    
    for (const item of items) {
      const body = item.body || item.resource
      if (!body?.value && !body?.chars) continue
      
      const value = body.value || body.chars
      const language = body.language || ""
      
      if (language === "fr" || language === "fro") {
        result.transcription = value
      } else if (language === "en") {
        result.translation = value
      }
    }
    
    return result
  } catch {
    return {}
  }
}
