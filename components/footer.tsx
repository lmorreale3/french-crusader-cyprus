import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-rich-black text-papaya-whip">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* University Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a 
              href="https://www.upenn.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
              aria-label="University of Pennsylvania"
            >
              <div className="flex h-12 items-center justify-center rounded bg-papaya-whip/10 px-4">
                <span className="text-sm font-medium">University of Pennsylvania</span>
              </div>
            </a>
            <a 
              href="https://www.uri.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
              aria-label="University of Rhode Island"
            >
              <div className="flex h-12 items-center justify-center rounded bg-papaya-whip/10 px-4">
                <span className="text-sm font-medium">University of Rhode Island</span>
              </div>
            </a>
            <a 
              href="https://english.tau.ac.il" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
              aria-label="Tel Aviv University"
            >
              <div className="flex h-12 items-center justify-center rounded bg-papaya-whip/10 px-4">
                <span className="text-sm font-medium">Tel Aviv University</span>
              </div>
            </a>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link 
              href="/about" 
              className="transition-colors hover:text-orange"
            >
              About the Project
            </Link>
            <Link 
              href="/teaching-resources" 
              className="transition-colors hover:text-orange"
            >
              Teaching Resources
            </Link>
            <a 
              href="mailto:contact@example.edu" 
              className="transition-colors hover:text-orange"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-xs text-papaya-whip/60">
            <p>French Texts from Crusader Cyprus Project</p>
            <p className="mt-1">
              This project is supported by the National Endowment for the Humanities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
