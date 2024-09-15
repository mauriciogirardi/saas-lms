import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type BackgroundGradientProps = {
  className?: string
  children: ReactNode
  container?: string
}

export function BackgroundGradient({
  className,
  children,
  container,
}: BackgroundGradientProps) {
  return (
    <div className={cn("relative w-full flex-flex-col", container)}>
      <div
        className={cn("absolute rounded-[50%] radial--blur mx-10", className)}
      />
      {children}
    </div>
  )
}
