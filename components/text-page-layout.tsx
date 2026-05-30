import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

interface TextPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  introduction: React.ReactNode;
  sourceUrl?: string;
  pdfUrl?: string;
}

export function TextPageLayout({
  title,
  subtitle,
  children,
  introduction,
  sourceUrl,
  pdfUrl,
}: TextPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">{title}</h1>
              <p className="text-primary-foreground/80 mt-1">{subtitle}</p>
            </div>
            {pdfUrl && (
              <a
                href={pdfUrl}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="bg-muted py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Introduction</h2>
          <div className="prose prose-stone max-w-none text-muted-foreground leading-relaxed">
            {introduction}
          </div>
        </div>
      </section>

      {/* Manuscript Viewer */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Manuscript Viewer</h2>
          {children}
        </div>
      </section>

      {/* About This Text */}
      <section className="bg-muted py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">About This Text</h2>
          <div className="bg-white rounded-lg border border-stone-200 p-6">
            {sourceUrl && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-stone-500 mb-1">Source</h3>
                <a 
                  href={sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on FromThePage
                </a>
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-stone-500 mb-1">Project</h3>
              <p className="text-stone-800">French Texts from Crusader Cyprus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
              University of Pennsylvania
            </span>
            <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
              University of Rhode Island
            </span>
            <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
              Tel Aviv University
            </span>
          </div>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/70 mb-4">
            <Link href="/about" className="hover:text-primary-foreground transition-colors">About the Project</Link>
            <Link href="/teaching" className="hover:text-primary-foreground transition-colors">Teaching Resources</Link>
            <Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-primary-foreground/50">
            French Texts from Crusader Cyprus Project
          </p>
          <p className="text-xs text-primary-foreground/50 mt-1">
            This project is supported by the National Endowment for the Humanities.
          </p>
        </div>
      </footer>
    </div>
  );
}
