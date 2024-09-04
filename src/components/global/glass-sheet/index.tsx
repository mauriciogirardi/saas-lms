import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type GlassSheetProps = {
  children: ReactNode
  trigger: ReactNode
  className?: string
  triggerClass?: string
}

export function GlassSheet({
  children,
  trigger,
  className,
  triggerClass,
}: GlassSheetProps) {
  return (
    <Sheet>
      <SheetTrigger className={cn(triggerClass)}>{trigger}</SheetTrigger>
      <SheetContent
        className={cn(
          "bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray",
          className,
        )}
      >
        {children}
      </SheetContent>
    </Sheet>
  )
}
