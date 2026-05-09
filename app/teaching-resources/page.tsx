import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Teaching Resources | French Texts from Crusader Cyprus",
  description: "Pedagogical materials and teaching resources for studying medieval French legal texts from the Crusader states.",
}

const resources = [
  {
    icon: BookOpen,
    title: "Primary Source Analysis",
    description: "Guided exercises for analyzing medieval legal documents, including paleography basics and historical context frameworks.",
    link: "#",
    linkText: "Coming Soon",
    disabled: true,
  },
  {
    icon: FileText,
    title: "Comparative Law Exercises",
    description: "Activities comparing Crusader legal traditions with contemporary European law codes, suitable for upper-level undergraduates.",
    link: "#",
    linkText: "Coming Soon",
    disabled: true,
  },
  {
    icon: GraduationCap,
    title: "Graduate Seminar Materials",
    description: "In-depth discussion guides and research project frameworks for graduate-level seminars on medieval law and society.",
    link: "#",
    linkText: "Coming Soon",
    disabled: true,
  },
  {
    icon: Users,
    title: "Collaborative Transcription",
    description: "Guidelines for classroom transcription projects using FromThePage, fostering hands-on engagement with manuscript sources.",
    link: "#",
    linkText: "Coming Soon",
    disabled: true,
  },
]

export default function TeachingResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b border-border bg-rich-black py-12 text-papaya-whip lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Teaching Resources
            </h1>
            <p className="mt-4 text-lg text-papaya-whip/80">
              Educational materials for incorporating Crusader legal texts into your curriculum
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              For Educators
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The French Texts from Crusader Cyprus project is committed to making medieval 
                legal sources accessible for teaching at all levels. Our teaching resources 
                are designed to help educators incorporate these fascinating primary sources 
                into courses on medieval history, legal history, French language and literature, 
                and Middle Eastern studies.
              </p>
              <p>
                We are currently developing a comprehensive suite of pedagogical materials, 
                from introductory exercises suitable for survey courses to advanced research 
                frameworks for graduate seminars. Check back soon for new resources, or 
                contact us to discuss your teaching needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground">
            Available Resources
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((resource) => (
              <Card key={resource.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-base leading-relaxed">
                    {resource.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Button 
                      variant={resource.disabled ? "outline" : "default"} 
                      disabled={resource.disabled}
                      asChild={!resource.disabled}
                    >
                      {resource.disabled ? (
                        <span className="text-muted-foreground">{resource.linkText}</span>
                      ) : (
                        <Link href={resource.link}>{resource.linkText}</Link>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Need Custom Materials?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We welcome collaboration with educators who wish to develop new teaching 
              resources using our texts. Contact us to discuss your curriculum needs 
              or to share teaching materials you have created.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="mailto:contact@example.edu">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="border-t border-border bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-xl font-bold text-foreground">
              Explore Our Texts
            </h2>
            <p className="mt-2 text-muted-foreground">
              Begin exploring the primary sources that form the foundation of our teaching resources.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/texts/livre-au-roi">
                  View Manuscript Collection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
