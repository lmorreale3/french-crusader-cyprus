"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchManifest } from "@/lib/iiif/fetch-manifest"

interface DownloadButtonProps {
  title: string
  manifestUrl: string
  canvasFilter?: {
    start: number
    end: number
  }
}

export function DownloadButton({ title, manifestUrl, canvasFilter }: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  async function handleDownload() {
    setIsGenerating(true)
    
    try {
      // Dynamically import jsPDF to avoid SSR issues with fflate worker
      const { jsPDF } = await import("jspdf")
      
      // Fetch the manifest to get transcription and translation
      const manifest = await fetchManifest(manifestUrl, canvasFilter)
      
      // Create PDF
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pageWidth = doc.internal.pageSize.getWidth()
      const margin = 20
      const contentWidth = pageWidth - (margin * 2)
      
      // Title
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text(title, margin, margin + 10)
      
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text("French Texts from Crusader Cyprus Project", margin, margin + 18)
      doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, margin + 24)
      
      let yPosition = margin + 40

      // Process each folio
      for (const folio of manifest.folios) {
        // Check if we need a new page
        if (yPosition > 250) {
          doc.addPage()
          yPosition = margin
        }

        // Folio header
        doc.setFontSize(12)
        doc.setFont("helvetica", "bold")
        doc.text(folio.label, margin, yPosition)
        yPosition += 8

        // Transcription
        if (folio.transcription) {
          doc.setFontSize(10)
          doc.setFont("helvetica", "bolditalic")
          doc.text("Transcription:", margin, yPosition)
          yPosition += 6
          
          doc.setFont("helvetica", "italic")
          const transcriptionText = stripHtml(folio.transcription)
          const transcriptionLines = doc.splitTextToSize(transcriptionText, contentWidth)
          
          for (const line of transcriptionLines) {
            if (yPosition > 270) {
              doc.addPage()
              yPosition = margin
            }
            doc.text(line, margin, yPosition)
            yPosition += 5
          }
          yPosition += 4
        }

        // Translation
        if (folio.translation) {
          if (yPosition > 250) {
            doc.addPage()
            yPosition = margin
          }
          
          doc.setFontSize(10)
          doc.setFont("helvetica", "bold")
          doc.text("Translation:", margin, yPosition)
          yPosition += 6
          
          doc.setFont("helvetica", "normal")
          const translationText = stripHtml(folio.translation)
          const translationLines = doc.splitTextToSize(translationText, contentWidth)
          
          for (const line of translationLines) {
            if (yPosition > 270) {
              doc.addPage()
              yPosition = margin
            }
            doc.text(line, margin, yPosition)
            yPosition += 5
          }
        }

        yPosition += 10 // Space between folios
      }

      // Save the PDF
      const fileName = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`
      doc.save(fileName)
      
    } catch (error) {
      console.error("Failed to generate PDF:", error)
      alert("Failed to generate PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      className="bg-orange text-rich-black hover:bg-orange/90"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </>
      )}
    </Button>
  )
}

// Helper function to strip HTML tags
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
}
