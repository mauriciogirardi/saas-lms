import { GlassSheet } from "@/components/global/glass-sheet"
import { Button } from "@/components/ui/button"
import { IconLogout } from "@/icons/logout"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { Menu } from "./menu"

export function LandingPageNavbar() {
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <p className="font-bold text-2xl">Grouple.</p>
      <Menu orientation="desktop" />

      <div className="flex gap-2">
        <Button
          asChild
          variant="outline"
          className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
        >
          <Link href="/sign-in">
            <IconLogout />
            Login
          </Link>
        </Button>

        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  )
}
