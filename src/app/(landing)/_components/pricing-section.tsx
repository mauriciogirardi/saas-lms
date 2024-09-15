import { BackgroundGradient } from "@/components/global/background-gradient"
import { GradientText } from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full pt-20 flex flex-col items-center gap-3"
    >
      <BackgroundGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <GradientText
          element="H2"
          className="text-4xl font-semibold text-center"
        >
          Pricing Plans That Fit Your Right
        </GradientText>
        <p className="text-sm md:text-center text-left text-muted-foreground">
          Grouple is a vibrant online community platform that empowers people to
          connect, <br className="hidden md:block" /> collaborate, and cultivate
          meaningful relationships
        </p>
      </BackgroundGradient>

      <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
        <div className="flex flex-col gap-2">
          <CardTitle>99/m</CardTitle>
          <CardDescription className="text-[#B4B0AE]">
            Great if you you´re just getting started
          </CardDescription>
          <Button
            asChild
            className="bg-[#333337] w-full rounded-xl text-white hover:bg-[#333337]/90 "
          >
            <Link href="#" className="w-full mt-3">
              Start for free
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-4 text-[#B4B0AE] mt-5">
          <p>Features</p>
          <span className="flex gap-2 items-center">
            <Check className="size-4 text-emerald-500" />
            Feature number 1
          </span>
          <span className="flex gap-2 items-center">
            <Check className="size-4 text-emerald-500" />
            Feature number 1
          </span>
          <span className="flex gap-2 items-center">
            <Check className="size-4 text-emerald-500" />
            Feature number 1
          </span>
          <span className="flex gap-2 items-center">
            <X className="size-4 text-red-500" />
            Feature number 1
          </span>
          <span className="flex gap-2 items-center">
            <Check className="size-4 text-emerald-500" />
            Feature number 1
          </span>
          <span className="flex gap-2 items-center">
            <Check className="size-4 text-emerald-500" />
            Feature number 1
          </span>
          <span className="flex gap-2 items-center">
            <Check className="size-4 text-emerald-500" />
            Feature number 1
          </span>
        </div>
      </Card>
    </section>
  )
}
