import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function GroupCreatePage() {
  const user = await currentUser()
  if (!user) redirect("/sign-in")

  return (
    <div>
      <p>Group create</p>
    </div>
  )
}
