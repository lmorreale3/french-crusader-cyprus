import { BookOpen, GraduationCap, FileText } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Manuscript Facsimiles",
    description:
      "High-resolution IIIF images allow detailed examination of the original manuscripts with zoom and pan capabilities.",
  },
  {
    icon: FileText,
    title: "Scholarly Editions",
    description:
      "Expert transcriptions with critical apparatus and comprehensive English translations for modern readers.",
  },
  {
    icon: GraduationCap,
    title: "Teaching Resources",
    description:
      "Pedagogical materials designed for classroom use, from undergraduate surveys to graduate seminars.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20 text-secondary mb-4">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
