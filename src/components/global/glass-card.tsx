import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Card } from "../ui/card"

type GlassCardProps = {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <Card
      className={cn(
        className,
        "rounded-2xl bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-3xl bg-opacity-40 p-7",
      )}
    >
      {children}
    </Card>
  )
}
