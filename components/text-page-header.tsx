"use client"

import dynamic from "next/dynamic"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Dynamically import DownloadButton with SSR disabled to avoid jsPDF/fflate worker issues
const DownloadButton = dynamic(
  () => import("@/components/download-button").then((mod) => mod.DownloadButton),
  { 
    ssr: false,
    loading: () => (
      <Button disabled className="bg-orange/50 text-rich-black">
        Loading...
      </Button>
    )
  }
)

interface TextPageHeaderProps {
  title: string
  sourceType: "fromthepage" | "iiif"
  manifestUrl: string
  canvasFilter?: {
    start: number
    end: number
  }
}

export function TextPageHeader({ 
  title, 
  sourceType, 
  manifestUrl,
  canvasFilter 
}: TextPageHeaderProps) {
  return (
    <section className="border-b border-border bg-[#001524] py-8 text-[#FFECD1] lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="text-[#FFECD1]/80 hover:bg-[#15616D] hover:text-[#FFECD1]"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-[#FFECD1]/70">
              {sourceType === "fromthepage" ? "FromThePage Transcription Project" : "IIIF Manifest"}
            </p>
          </div>
          <DownloadButton 
            title={title}
            manifestUrl={manifestUrl}
            canvasFilter={canvasFilter}
          />
        </div>
      </div>
    </section>
  )
}
