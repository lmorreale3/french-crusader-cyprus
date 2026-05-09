import type { Metadata } from "next"
import { ScholarCard } from "@/components/scholar-card"

export const metadata: Metadata = {
  title: "About | French Texts from Crusader Cyprus",
  description: "Learn about the French Texts from Crusader Cyprus project and the scholars behind this digital humanities initiative.",
}

const scholars = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Principal Investigator",
    institution: "University of Pennsylvania",
    bio: "Dr. Mitchell is a specialist in medieval French literature and the legal traditions of the Crusader states. Her research focuses on the transmission of legal knowledge between East and West during the medieval period. She has published extensively on the Assises de Jerusalem and the development of Crusader jurisprudence.",
    imagePosition: "left" as const,
  },
  {
    name: "Dr. Jean-Pierre Dubois",
    title: "Co-Investigator",
    institution: "University of Rhode Island",
    bio: "Dr. Dubois brings expertise in Old French philology and digital humanities methodologies. His work on computer-assisted textual analysis has been instrumental in developing new approaches to medieval manuscript study. He leads our transcription verification processes and linguistic analysis.",
    imagePosition: "right" as const,
  },
  {
    name: "Dr. Rachel Cohen",
    title: "Co-Investigator",
    institution: "Tel Aviv University",
    bio: "Dr. Cohen specializes in the history of the Crusader Kingdom of Jerusalem and its successor states. Her archaeological and archival research in Cyprus has uncovered new evidence about the practical application of Crusader law. She provides essential historical context for our textual editions.",
    imagePosition: "left" as const,
  },
  {
    name: "Dr. Michael Thompson",
    title: "Digital Humanities Specialist",
    institution: "University of Pennsylvania",
    bio: "Dr. Thompson oversees the technical infrastructure of the project, including our IIIF implementation and web development. His expertise in digital scholarly editing ensures that our digital editions meet the highest standards of accessibility and interoperability.",
    imagePosition: "right" as const,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b border-border bg-rich-black py-12 text-papaya-whip lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              About the Project
            </h1>
            <p className="mt-4 text-lg text-papaya-whip/80">
              A collaborative digital humanities initiative
            </p>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The French Texts from Crusader Cyprus project brings together an international 
                team of scholars to create comprehensive digital editions of medieval French 
                legal texts from the Eastern Mediterranean. Our goal is to make these important 
                historical sources accessible to researchers, students, and the general public 
                through high-quality transcriptions, translations, and scholarly apparatus.
              </p>
              <p>
                These texts, composed in Old French during the twelfth and thirteenth centuries, 
                document the unique legal traditions that developed in the Crusader states of 
                the Levant. They provide invaluable evidence for understanding medieval law, 
                society, and the French language as it was used far from its European homeland.
              </p>
              <p>
                By leveraging cutting-edge digital humanities technologies, including the 
                International Image Interoperability Framework (IIIF) and collaborative 
                transcription platforms, we aim to create editions that are both 
                scholarly rigorous and widely accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholars Section */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground">
            Project Team
          </h2>
          <div className="space-y-8">
            {scholars.map((scholar) => (
              <ScholarCard key={scholar.name} {...scholar} />
            ))}
          </div>
        </div>
      </section>

      {/* Colored Section */}
      <section className="bg-teal py-12 text-papaya-whip lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold">
              Funding and Support
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-papaya-whip/90">
              <p>
                The French Texts from Crusader Cyprus project is generously supported by the 
                National Endowment for the Humanities, which has provided funding for 
                digital infrastructure development, scholarly collaboration, and public 
                outreach activities.
              </p>
              <p>
                We are grateful to our partner institutions for their ongoing support, 
                including access to manuscript collections, library resources, and 
                computational infrastructure. The collaboration between the University 
                of Pennsylvania, the University of Rhode Island, and Tel Aviv University 
                exemplifies the international cooperation essential for digital humanities 
                projects of this scope.
              </p>
              <p>
                We also acknowledge the essential contribution of FromThePage and its 
                community of volunteer transcribers, whose work has made our collaborative 
                transcription model possible. Their dedication to making historical texts 
                accessible aligns perfectly with our project goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We welcome inquiries from scholars, educators, and anyone interested in 
              medieval legal history and digital humanities. Whether you have questions 
              about our texts, want to discuss collaboration opportunities, or are 
              interested in using our materials for teaching, we would love to hear from you.
            </p>
            <div className="mt-8">
              <a 
                href="mailto:contact@example.edu"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact the Project Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
