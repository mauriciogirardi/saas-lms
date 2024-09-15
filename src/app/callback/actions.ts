"use server"

import { client } from "@/lib/prisma"

export async function onSignInUser(clerkId: string) {
  try {
    const loggedInUser = await client.user.findUnique({
      where: { clerkId },
      select: {
        id: true,
        group: {
          select: {
            id: true,
            channel: {
              select: {
                id: true,
              },
              take: 1,
              orderBy: {
                createdAt: "desc",
              },
            },
          },
        },
      },
    })

    if (loggedInUser) {
      if (loggedInUser.group.length > 0) {
        return {
          status: 207,
          id: loggedInUser.id,
          groupId: loggedInUser.group[0].id,
          channelId: loggedInUser.group[0].channel[0].id,
        }
      }

      return {
        status: 200,
        message: "User successfully logged in!",
        id: loggedInUser.id,
      }
    }

    return {
      status: 400,
      message: "User cold not be logged in! try again.",
    }
  } catch {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again!",
    }
  }
}
