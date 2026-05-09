"use client"

import { useState, useRef, useCallback } from "react"
import { ZoomIn, ZoomOut, RotateCw, Home, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FacsimilePaneProps {
  imageUrl: string
  imageServiceUrl?: string
  label: string
  width?: number
  height?: number
}

export function FacsimilePane({ imageUrl, label }: FacsimilePaneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = useCallback(() => {
    setScale(s => Math.min(s * 1.5, 10))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale(s => Math.max(s / 1.5, 0.1))
  }, [])

  const handleHome = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setRotation(0)
  }, [])

  const handleRotate = useCallback(() => {
    setRotation(r => (r + 90) % 360)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }, [position])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setScale(s => Math.min(Math.max(s * delta, 0.1), 10))
  }, [])

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border bg-muted px-3 py-2">
        <h3 className="text-sm font-medium text-foreground">Facsimile</h3>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleZoomIn}
            title="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
            <span className="sr-only">Zoom in</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleZoomOut}
            title="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleHome}
            title="Reset view"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Reset view</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleRotate}
            title="Rotate 90 degrees"
          >
            <RotateCw className="h-4 w-4" />
            <span className="sr-only">Rotate</span>
          </Button>
        </div>
      </div>
      <div 
        ref={containerRef}
        className="relative flex-1 overflow-hidden bg-neutral-900 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Failed to load image</p>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={label}
          className="absolute select-none"
          style={{ 
            top: '50%',
            left: '50%',
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            pointerEvents: 'none'
          }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          draggable={false}
        />
      </div>
    </div>
  )
}
