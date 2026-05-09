import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const featuredTexts = [
  {
    title: "Le Livre au Roi",
    description: "The foundational legal text of the Kingdom of Jerusalem, preserved in a Bavarian manuscript.",
    slug: "livre-au-roi",
  },
  {
    title: "Livre de Jacques d'Ibelin",
    description: "A comprehensive treatise on the laws and customs of the Crusader states.",
    slug: "livre-de-jacques-d-ibelin",
  },
  {
    title: "La Clef des Assises",
    description: "The key to understanding the legal framework of medieval Cyprus.",
    slug: "la-clef-des-assises",
  },
  {
    title: "Le Conseil du Roi Charles",
    description: "Royal counsel documents from the Angevin period.",
    slug: "le-conseil-du-roi-charles",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-rich-black py-20 text-papaya-whip lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-balance">French Legal Texts from Crusader Cyprus</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-papaya-whip/80 sm:text-xl">
              Explore medieval French legal manuscripts with high-resolution facsimiles, 
              scholarly transcriptions, and modern English translations.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-teal text-papaya-whip hover:bg-teal/90">
                <Link href="/texts/livre-au-roi">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Texts
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-papaya-whip text-papaya-whip hover:bg-papaya-whip hover:text-rich-black">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              About the Project
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The French Texts from Crusader Cyprus project brings together scholars from the 
                University of Pennsylvania, the University of Rhode Island, and Tel Aviv University 
                to create a comprehensive digital resource for the study of medieval French legal 
                texts from the Eastern Mediterranean.
              </p>
              <p>
                These texts, composed in Old French during the Crusader period, represent a unique 
                legal tradition that developed in the Latin Kingdom of Jerusalem and the subsequent 
                Kingdom of Cyprus. They provide invaluable insights into medieval law, society, and 
                the French language as it was used in the Levant.
              </p>
              <p>
                Our digital editions feature high-resolution manuscript images provided through the 
                International Image Interoperability Framework (IIIF), alongside diplomatic 
                transcriptions and scholarly English translations. Each text is accompanied by 
                detailed introductions and annotations to aid in understanding these complex 
                historical documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Texts Section */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Featured Texts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Begin your exploration with these foundational legal documents
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTexts.map((text) => (
              <Card key={text.slug} className="group transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-lg group-hover:text-primary">
                    <Link href={`/texts/${text.slug}`}>
                      {text.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {text.description}
                  </CardDescription>
                  <Link 
                    href={`/texts/${text.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    View Text
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/texts/livre-au-roi">
                View All Texts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">Manuscript Facsimiles</h3>
              <p className="text-muted-foreground">
                High-resolution IIIF images allow detailed examination of the original manuscripts 
                with zoom and pan capabilities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                <GraduationCap className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">Scholarly Editions</h3>
              <p className="text-muted-foreground">
                Expert transcriptions with critical apparatus and comprehensive English translations 
                for modern readers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">Teaching Resources</h3>
              <p className="text-muted-foreground">
                Pedagogical materials designed for classroom use, from undergraduate surveys to 
                graduate seminars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rosewood py-16 text-papaya-whip lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold">
            Ready to Explore?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-papaya-whip/80">
            Dive into the rich legal heritage of the Crusader states with our comprehensive 
            digital editions and teaching materials.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-papaya-whip text-rosewood hover:bg-papaya-whip/90">
              <Link href="/texts/livre-au-roi">
                Start Reading
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-papaya-whip text-papaya-whip hover:bg-papaya-whip hover:text-rosewood">
              <Link href="/teaching-resources">
                For Educators
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
