import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-balance">
          Ready to Explore?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Dive into the rich legal heritage of the Crusader states with our
          comprehensive digital editions and teaching materials.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/texts"
            className="inline-flex items-center px-6 py-3 bg-primary-foreground text-primary rounded-md font-medium hover:opacity-90"
          >
            Start Reading
          </Link>
          <Link
            href="/teaching"
            className="inline-flex items-center px-6 py-3 border-2 border-accent-foreground/30 rounded-md font-medium hover:bg-accent-foreground/10"
          >
            For Educators
          </Link>
        </div>
      </div>
    </section>
  );
}
