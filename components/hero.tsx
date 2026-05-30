import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          French Legal Texts from Crusader Cyprus
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Explore medieval French legal manuscripts with high-resolution
          facsimiles, scholarly transcriptions, and modern English translations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/texts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:opacity-90"
          >
            <BookOpen className="h-5 w-5" />
            Explore Texts
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-foreground/30 rounded-md font-medium hover:bg-primary-foreground/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
