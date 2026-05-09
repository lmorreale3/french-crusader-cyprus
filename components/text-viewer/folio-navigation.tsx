"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { FolioContent } from "@/lib/iiif/types"

interface FolioNavigationProps {
  folios: FolioContent[]
  currentIndex: number
  onNavigate: (index: number) => void
}

export function FolioNavigation({ folios, currentIndex, onNavigate }: FolioNavigationProps) {
  const currentFolio = folios[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < folios.length - 1

  return (
    <div className="flex items-center justify-center gap-2 border-t border-border bg-muted px-4 py-3">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={!hasPrev}
        aria-label="Previous folio"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Select
        value={currentIndex.toString()}
        onValueChange={(value) => onNavigate(parseInt(value, 10))}
      >
        <SelectTrigger className="w-48">
          <SelectValue>
            {currentFolio?.label || `Folio ${currentIndex + 1}`}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {folios.map((folio, index) => (
            <SelectItem key={folio.canvasId} value={index.toString()}>
              {folio.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="text-sm text-muted-foreground">
        {currentIndex + 1} of {folios.length}
      </span>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onNavigate(currentIndex + 1)}
        disabled={!hasNext}
        aria-label="Next folio"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
