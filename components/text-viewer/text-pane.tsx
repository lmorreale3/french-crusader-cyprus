"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface TextPaneProps {
  title: string
  content?: string
  variant: "transcription" | "translation"
  isLoading?: boolean
}

export function TextPane({ title, content, variant, isLoading }: TextPaneProps) {
  const variantStyles = {
    transcription: "bg-amber-50/50",
    translation: "bg-sky-50/50",
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border bg-muted px-3 py-2">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        {variant === "transcription" && (
          <span className="text-xs text-muted-foreground">Old French</span>
        )}
        {variant === "translation" && (
          <span className="text-xs text-muted-foreground">English</span>
        )}
      </div>
      <ScrollArea className={cn("flex-1", variantStyles[variant])}>
        <div className="p-4">
          {isLoading ? (
            <div className="space-y-3">
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            </div>
          ) : content ? (
            <div 
              className={cn(
                "prose prose-sm max-w-none leading-relaxed",
                variant === "transcription" && "font-serif italic"
              )}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <p className="text-sm italic text-muted-foreground">
              {variant === "transcription" 
                ? "No transcription available for this folio."
                : "No translation available for this folio."}
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
