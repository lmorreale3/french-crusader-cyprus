// IIIF Presentation API 3.0 types

export interface IIIFManifest {
  "@context": string | string[]
  id: string
  type: "Manifest"
  label: LocalizedString
  metadata?: MetadataItem[]
  summary?: LocalizedString
  thumbnail?: Resource[]
  items: Canvas[]
  structures?: Range[]
  annotations?: AnnotationPage[]
  seeAlso?: SeeAlso[]
}

export interface LocalizedString {
  [language: string]: string[]
}

export interface MetadataItem {
  label: LocalizedString
  value: LocalizedString
}

export interface Canvas {
  id: string
  type: "Canvas"
  label: LocalizedString
  width: number
  height: number
  items: AnnotationPage[]
  annotations?: AnnotationPage[]
  thumbnail?: Resource[]
}

export interface AnnotationPage {
  id: string
  type: "AnnotationPage"
  items: Annotation[]
}

export interface Annotation {
  id: string
  type: "Annotation"
  motivation: string | string[]
  body: AnnotationBody | AnnotationBody[]
  target: string | AnnotationTarget
}

export interface AnnotationBody {
  type: string
  format?: string
  language?: string
  value?: string
  id?: string
  service?: Service[]
}

export interface AnnotationTarget {
  type?: string
  source: string
  selector?: Selector
}

export interface Selector {
  type: string
  value?: string
  x?: number
  y?: number
  width?: number
  height?: number
}

export interface Resource {
  id: string
  type: string
  format?: string
  width?: number
  height?: number
  service?: Service[]
}

export interface Service {
  id?: string
  "@id"?: string
  type?: string
  "@type"?: string
  profile?: string
}

export interface Range {
  id: string
  type: "Range"
  label: LocalizedString
  items: (Canvas | Range | { id: string; type: string })[]
}

export interface SeeAlso {
  id: string
  type: string
  format?: string
  profile?: string
}

// Parsed content types for our viewer
export interface FolioContent {
  canvasId: string
  label: string
  imageUrl: string
  imageServiceUrl?: string
  transcription?: string
  translation?: string
  width: number
  height: number
}

export interface ParsedManifest {
  id: string
  label: string
  metadata: Record<string, string>
  folios: FolioContent[]
}
