"use client"

import { useState, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import { TextPane } from "./text-pane"
import { FolioNavigation } from "./folio-navigation"

// Dynamically import FacsimilePane with SSR disabled to avoid OpenSeadragon document reference
const FacsimilePane = dynamic(
  () => import("./facsimile-pane").then((mod) => mod.FacsimilePane),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-muted">
        <p className="text-muted-foreground">Loading viewer...</p>
      </div>
    )
  }
)
import { fetchManifest } from "@/lib/iiif/fetch-manifest"
import type { FolioContent, ParsedManifest } from "@/lib/iiif/types"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ThreePaneViewerProps {
  manifestUrl: string
  canvasFilter?: {
    start: number
    end: number
  }
}

export function ThreePaneViewer({ manifestUrl, canvasFilter }: ThreePaneViewerProps) {
  const [manifest, setManifest] = useState<ParsedManifest | null>(null)
  const [currentFolioIndex, setCurrentFolioIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadManifest() {
      setIsLoading(true)
      setError(null)
      
      try {
        const data = await fetchManifest(manifestUrl, canvasFilter)
        setManifest(data)
      } catch (err) {
        console.error("Failed to load manifest:", err)
        setError(
          err instanceof Error 
            ? err.message 
            : "Failed to load manuscript data. Please try again later."
        )
      } finally {
        setIsLoading(false)
      }
    }

    loadManifest()
  }, [manifestUrl, canvasFilter])

  const handleNavigate = useCallback((index: number) => {
    if (manifest && index >= 0 && index < manifest.folios.length) {
      setCurrentFolioIndex(index)
    }
  }, [manifest])

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!manifest) return
      
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault()
        handleNavigate(currentFolioIndex - 1)
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault()
        handleNavigate(currentFolioIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [manifest, currentFolioIndex, handleNavigate])

  if (isLoading) {
    return (
      <div className="flex h-[600px] items-center justify-center rounded-lg border border-border bg-card">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p>Loading manuscript...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mx-auto max-w-2xl">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error Loading Manuscript</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!manifest || manifest.folios.length === 0) {
    return (
      <Alert className="mx-auto max-w-2xl">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>No Content Available</AlertTitle>
        <AlertDescription>
          This manuscript does not have any viewable content at this time.
        </AlertDescription>
      </Alert>
    )
  }

  const currentFolio: FolioContent = manifest.folios[currentFolioIndex]

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      {/* Three-pane layout */}
      <div className="grid h-[600px] grid-cols-1 divide-y divide-border lg:h-[700px] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* Facsimile Pane */}
        <div className="h-[300px] lg:h-full">
          <FacsimilePane
            imageUrl={currentFolio.imageUrl}
            imageServiceUrl={currentFolio.imageServiceUrl}
            label={currentFolio.label}
            width={currentFolio.width}
            height={currentFolio.height}
          />
        </div>

        {/* Transcription Pane */}
        <div className="h-[150px] lg:h-full">
          <TextPane
            title="Transcription"
            content={currentFolio.transcription}
            variant="transcription"
          />
        </div>

        {/* Translation Pane */}
        <div className="h-[150px] lg:h-full">
          <TextPane
            title="Translation"
            content={currentFolio.translation}
            variant="translation"
          />
        </div>
      </div>

      {/* Navigation */}
      <FolioNavigation
        folios={manifest.folios}
        currentIndex={currentFolioIndex}
        onNavigate={handleNavigate}
      />
    </div>
  )
}
