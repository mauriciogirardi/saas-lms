import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type GradientTextProps = {
  className?: string
  element?: "H1" | "H2"
  children: ReactNode
}

export function GradientText({
  className,
  element,
  children,
}: GradientTextProps) {
  switch (element) {
    case "H1":
      return <h1 className={cn(className, "text-gradient")}>{children}</h1>
    case "H2":
      return <h2 className={cn(className, "text-gradient")}>{children}</h2>
    default:
      return <p className={cn(className, "text-gradient")}>{children}</p>
  }
}
