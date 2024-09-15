import { onSignUpUser } from "@/app/(auth)/actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function CompleteOAuthAfterCallback() {
  const user = await currentUser()

  if (!user) redirect("/sign-in")

  const complete = await onSignUpUser({
    firstName: user.firstName as string,
    lastName: user.lastName as string,
    clerkId: user.id,
    image: user.imageUrl,
  })

  if (complete.status === 200) redirect("/group/create")
  if (complete.status !== 200) redirect("/sign-in")
}
