"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const texts = [
  { name: "Le Livre au Roi", href: "/texts/livre-au-roi" },
  { name: "Livre de Jacques d'Ibelin", href: "/texts/jacques-ibelin" },
  { name: "La Clef des Assises", href: "/texts/clef-assises" },
  { name: "Le Conseil du Roi Charles", href: "/texts/conseil-roi-charles" },
];

export function Header() {
  const [textsOpen, setTextsOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold hover:opacity-90">
          French Texts from Crusader Cyprus
        </Link>
        <nav className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setTextsOpen(!textsOpen)}
              className="flex items-center gap-1 hover:opacity-90"
            >
              Texts
              <ChevronDown className="h-4 w-4" />
            </button>
            {textsOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-card text-card-foreground rounded-md shadow-lg py-2 z-50">
                {texts.map((text) => (
                  <Link
                    key={text.href}
                    href={text.href}
                    className="block px-4 py-2 hover:bg-muted"
                    onClick={() => setTextsOpen(false)}
                  >
                    {text.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/teaching" className="hover:opacity-90">
            Teaching Resources
          </Link>
          <Link href="/about" className="hover:opacity-90">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
