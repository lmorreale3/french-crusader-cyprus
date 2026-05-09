import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getTextBySlug, getAllTextSlugs } from "@/lib/texts-data"
import { ThreePaneViewer } from "@/components/text-viewer/three-pane-viewer"
import { TextPageHeader } from "@/components/text-page-header"

interface TextPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTextSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: TextPageProps): Promise<Metadata> {
  const { slug } = await params
  const text = getTextBySlug(slug)
  
  if (!text) {
    return {
      title: "Text Not Found",
    }
  }

  return {
    title: `${text.title} | French Texts from Crusader Cyprus`,
    description: text.introduction.slice(0, 160) + "...",
  }
}

export default async function TextPage({ params }: TextPageProps) {
  const { slug } = await params
  const text = getTextBySlug(slug)

  if (!text) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <TextPageHeader
        title={text.title}
        sourceType={text.sourceType}
        manifestUrl={text.manifestUrl}
        canvasFilter={text.canvasFilter}
      />

      {/* Introduction Section */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
              Introduction
            </h2>
            <div className="prose prose-lg max-w-none leading-relaxed text-muted-foreground">
              {text.introduction.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Viewer Section */}
      <section className="bg-muted py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
            Manuscript Viewer
          </h2>
          <ThreePaneViewer 
            manifestUrl={text.manifestUrl}
            canvasFilter={text.canvasFilter}
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Use arrow keys or the navigation controls to browse folios. Scroll or pinch to zoom the facsimile.
          </p>
        </div>
      </section>

      {/* Metadata Section */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
              About This Text
            </h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Source</dt>
                  <dd className="mt-1 text-foreground">
                    {text.sourceType === "fromthepage" ? (
                      <a 
                        href={text.fromthePageUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View on FromThePage
                      </a>
                    ) : (
                      <a 
                        href={text.manifestUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        IIIF Manifest
                      </a>
                    )}
                  </dd>
                </div>
                {text.canvasFilter && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Folios</dt>
                    <dd className="mt-1 text-foreground">
                      Canvases {text.canvasFilter.start} - {text.canvasFilter.end}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Project</dt>
                  <dd className="mt-1 text-foreground">
                    French Texts from Crusader Cyprus
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
