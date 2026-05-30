import Link from "next/link";
import { ArrowRight } from "lucide-react";

const texts = [
  {
    title: "Le Livre au Roi",
    description:
      "The foundational legal text of the Kingdom of Jerusalem, preserved in a Bavarian manuscript.",
    href: "/texts/livre-au-roi",
  },
  {
    title: "Livre de Jacques d'Ibelin",
    description:
      "A comprehensive treatise on the laws and customs of the Crusader states.",
    href: "/texts/jacques-ibelin",
  },
  {
    title: "La Clef des Assises",
    description:
      "The key to understanding the legal framework of medieval Cyprus.",
    href: "/texts/clef-des-assises",
  },
  {
    title: "Le Conseil du Roi Charles",
    description: "Royal counsel documents from the Angevin period.",
    href: "/texts/conseil-roi-charles",
  },
];

export function FeaturedTexts() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            Featured Texts
          </h2>
          <p className="text-foreground/70 text-lg">
            Begin your exploration with these foundational legal documents
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {texts.map((text) => (
            <div
              key={text.href}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <Link
                href={text.href}
                className="text-xl font-semibold text-foreground hover:text-secondary block mb-2"
              >
                {text.title}
              </Link>
              <p className="text-foreground/70 mb-4 text-sm">
                {text.description}
              </p>
              <Link
                href={text.href}
                className="inline-flex items-center gap-1 text-secondary font-medium text-sm hover:gap-2 transition-all"
              >
                View Text
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/texts"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground rounded-md text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            View All Texts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
