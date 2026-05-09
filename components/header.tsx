"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const textPages = [
  { title: "Le Livre au Roi", slug: "livre-au-roi" },
  { title: "Livre de Jacques d'Ibelin", slug: "livre-de-jacques-d-ibelin" },
  { title: "La Clef des Assises", slug: "la-clef-des-assises" },
  { title: "Livre de Geoffroy le Tort", slug: "livre-de-geoffroy-le-tort" },
  { title: "Le Conseil du Roi Charles", slug: "le-conseil-du-roi-charles" },
  { title: "Two Small Works on Military Service and Judicial Combat", slug: "military-service-judicial-combat" },
  { title: "Les Livres du plédeant et du plaidoyer", slug: "livres-du-pledeant" },
  { title: "Treatise on Horses", slug: "treatise-on-horses" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isTextPage = pathname.startsWith("/texts/")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-rich-black text-papaya-whip">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Site Title */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-lg font-semibold tracking-tight sm:text-xl">
            French Texts from Crusader Cyprus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={cn(
                  "flex items-center gap-1 text-papaya-whip hover:bg-teal hover:text-papaya-whip",
                  isTextPage && "bg-teal/20"
                )}
              >
                Texts
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80 bg-card">
              {textPages.map((text) => (
                <DropdownMenuItem key={text.slug} asChild>
                  <Link 
                    href={`/texts/${text.slug}`}
                    className={cn(
                      "cursor-pointer",
                      pathname === `/texts/${text.slug}` && "bg-accent/20"
                    )}
                  >
                    {text.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/teaching-resources"
            className={cn(
              "text-sm font-medium transition-colors hover:text-orange",
              pathname === "/teaching-resources" ? "text-orange" : "text-papaya-whip"
            )}
          >
            Teaching Resources
          </Link>

          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-orange",
              pathname === "/about" ? "text-orange" : "text-papaya-whip"
            )}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-papaya-whip hover:bg-teal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-teal bg-rich-black md:hidden">
          <nav className="flex flex-col px-4 py-4">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal">
              Texts
            </div>
            {textPages.map((text) => (
              <Link
                key={text.slug}
                href={`/texts/${text.slug}`}
                className={cn(
                  "py-2 pl-4 text-sm transition-colors hover:text-orange",
                  pathname === `/texts/${text.slug}` ? "text-orange" : "text-papaya-whip"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {text.title}
              </Link>
            ))}
            <div className="my-4 border-t border-teal" />
            <Link
              href="/teaching-resources"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-orange",
                pathname === "/teaching-resources" ? "text-orange" : "text-papaya-whip"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Teaching Resources
            </Link>
            <Link
              href="/about"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-orange",
                pathname === "/about" ? "text-orange" : "text-papaya-whip"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
