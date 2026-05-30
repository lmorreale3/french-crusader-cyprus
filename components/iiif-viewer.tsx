"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ZoomIn, ZoomOut, RotateCw, Home, ChevronLeft, ChevronRight } from "lucide-react";

interface IIIFViewerProps {
  manifestUrl: string;
  initialPage?: number;
}

// Define OpenSeadragon types locally to avoid import issues
interface OSDViewport {
  zoomBy: (factor: number) => void;
  goHome: () => void;
  getRotation: () => number;
  setRotation: (degrees: number) => void;
}

interface OSDViewer {
  viewport: OSDViewport;
  destroy: () => void;
}

export function IIIFViewer({ manifestUrl, initialPage = 0 }: IIIFViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const osdRef = useRef<OSDViewer | null>(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [tileSources, setTileSources] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Only run on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch manifest and extract tile sources
  useEffect(() => {
    if (!isClient) return;
    
    async function fetchManifest() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(manifestUrl);
        if (!response.ok) throw new Error("Failed to fetch manifest");
        const manifest = await response.json();

        // Handle IIIF Presentation API 2.x or 3.x
        let sources: string[] = [];
        
        if (manifest.sequences) {
          // IIIF 2.x
          const canvases = manifest.sequences[0]?.canvases || [];
          sources = canvases.map((canvas: { images?: { resource?: { service?: { "@id"?: string } } }[] }) => {
            const imageService = canvas.images?.[0]?.resource?.service;
            if (imageService?.["@id"]) {
              return `${imageService["@id"]}/info.json`;
            }
            return null;
          }).filter(Boolean);
        } else if (manifest.items) {
          // IIIF 3.x
          sources = manifest.items.map((canvas: { items?: { items?: { body?: { service?: { id?: string; "@id"?: string }[] } }[] }[] }) => {
            const imageService = canvas.items?.[0]?.items?.[0]?.body?.service?.[0];
            if (imageService?.id || imageService?.["@id"]) {
              const serviceId = imageService.id || imageService["@id"];
              return `${serviceId}/info.json`;
            }
            return null;
          }).filter(Boolean);
        }

        setTileSources(sources);
        setTotalPages(sources.length);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load manifest");
        setIsLoading(false);
      }
    }

    fetchManifest();
  }, [manifestUrl, isClient]);

  // Initialize OpenSeadragon dynamically
  useEffect(() => {
    if (!isClient || !viewerRef.current || tileSources.length === 0) return;

    let viewer: OSDViewer | null = null;

    async function initViewer() {
      // Dynamic import to avoid SSR issues
      const OpenSeadragon = (await import("openseadragon")).default;
      
      if (!viewerRef.current) return;

      viewer = OpenSeadragon({
        element: viewerRef.current,
        tileSources: tileSources[currentPage],
        showNavigationControl: false,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl: false,
        gestureSettingsMouse: {
          scrollToZoom: true,
          clickToZoom: true,
          dblClickToZoom: true,
          pinchToZoom: true,
        },
        gestureSettingsTouch: {
          scrollToZoom: false,
          clickToZoom: false,
          dblClickToZoom: true,
          pinchToZoom: true,
        },
        visibilityRatio: 0.5,
        minZoomLevel: 0.5,
        maxZoomLevel: 10,
        animationTime: 0.3,
      }) as OSDViewer;

      osdRef.current = viewer;
    }

    initViewer();

    return () => {
      if (osdRef.current) {
        osdRef.current.destroy();
        osdRef.current = null;
      }
    };
  }, [tileSources, currentPage, isClient]);

  const handleZoomIn = useCallback(() => {
    if (osdRef.current) {
      osdRef.current.viewport.zoomBy(1.5);
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (osdRef.current) {
      osdRef.current.viewport.zoomBy(0.67);
    }
  }, []);

  const handleHome = useCallback(() => {
    if (osdRef.current) {
      osdRef.current.viewport.goHome();
    }
  }, []);

  const handleRotate = useCallback(() => {
    if (osdRef.current) {
      const currentRotation = osdRef.current.viewport.getRotation();
      osdRef.current.viewport.setRotation(currentRotation + 90);
    }
  }, []);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  if (!isClient || isLoading) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 bg-stone-200 flex items-center justify-center min-h-[300px]">
          <div className="text-stone-500">Loading manuscript...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 bg-stone-200 flex items-center justify-center min-h-[300px]">
          <div className="text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Image viewer area - takes all available space */}
      <div 
        ref={viewerRef} 
        className="flex-1 bg-stone-800 min-h-[300px]"
        style={{ cursor: "grab" }}
      />
      
      {/* Navigation controls - BELOW the image, outside the viewing area */}
      <div className="bg-stone-100 border-t border-stone-300 px-4 py-3 flex items-center justify-between">
        {/* Zoom and rotate controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-md bg-white border border-stone-300 hover:bg-stone-50 transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4 text-stone-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-md bg-white border border-stone-300 hover:bg-stone-50 transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4 text-stone-700" />
          </button>
          <button
            onClick={handleHome}
            className="p-2 rounded-md bg-white border border-stone-300 hover:bg-stone-50 transition-colors"
            title="Reset view"
          >
            <Home className="w-4 h-4 text-stone-700" />
          </button>
          <button
            onClick={handleRotate}
            className="p-2 rounded-md bg-white border border-stone-300 hover:bg-stone-50 transition-colors"
            title="Rotate"
          >
            <RotateCw className="w-4 h-4 text-stone-700" />
          </button>
        </div>

        {/* Page navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-md bg-white border border-stone-300 hover:bg-stone-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Previous page"
          >
            <ChevronLeft className="w-4 h-4 text-stone-700" />
          </button>
          <span className="text-sm text-stone-600 min-w-[80px] text-center">
            {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-md bg-white border border-stone-300 hover:bg-stone-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Next page"
          >
            <ChevronRight className="w-4 h-4 text-stone-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
