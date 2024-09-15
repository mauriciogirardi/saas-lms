import { BackgroundGradient } from "@/components/global/background-gradient"
import { GlassCard } from "@/components/global/glass-card"
import { redirect } from "next/navigation"
import { onAuthenticationUserAction } from "./actions"

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await onAuthenticationUserAction()

  if (user.status === 200) redirect("/callback/sign-in")

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col w-full items-center py-24">
        <h2 className="text-4xl font-bold text-themeTextWhite">Grouple.</h2>

        <BackgroundGradient
          className="w-4/12 h-2/6 opacity-40"
          container="flex flex-col items-center"
        >
          <GlassCard className="w-full md:w-7/12 lg:w-5/12 xl:w-4/12 mt-16">
            {children}
          </GlassCard>
        </BackgroundGradient>
      </div>
    </div>
  )
}
