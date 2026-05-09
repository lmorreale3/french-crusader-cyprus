import { cn } from "@/lib/utils"

interface ScholarCardProps {
  name: string
  title: string
  institution: string
  bio: string
  imagePosition: "left" | "right"
}

export function ScholarCard({ name, title, institution, bio, imagePosition }: ScholarCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center gap-6 rounded-lg bg-card p-6 shadow-sm md:flex-row md:gap-8",
        imagePosition === "right" && "md:flex-row-reverse"
      )}
    >
      {/* Placeholder Image */}
      <div className="flex-shrink-0">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-muted md:h-40 md:w-40">
          <span className="font-serif text-4xl font-bold text-muted-foreground md:text-5xl">
            {name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        "flex-1 text-center md:text-left",
        imagePosition === "right" && "md:text-right"
      )}>
        <h3 className="font-serif text-xl font-bold text-foreground">{name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{title}</p>
        <p className="text-sm text-muted-foreground">{institution}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{bio}</p>
      </div>
    </div>
  )
}
