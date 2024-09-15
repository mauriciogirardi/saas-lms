"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticationUserAction = async () => {
  try {
    const clerk = await currentUser()
    if (!clerk) return { status: 404 }

    const user = await client.user.findUnique({
      where: { clerkId: clerk.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    })

    if (user) {
      return {
        status: 200,
        id: user.id,
        image: clerk.imageUrl,
        username: `${user.firstName} ${user.lastName}`,
      }
    }

    return { status: 404 }
  } catch {
    return { status: 400 }
  }
}

type OnSignUpUserData = {
  firstName: string
  lastName: string
  image: string
  clerkId: string
}

export const onSignUpUser = async ({
  clerkId,
  firstName,
  image,
  lastName,
}: OnSignUpUserData) => {
  try {
    const createdUser = await client.user.create({
      data: {
        clerkId,
        firstName,
        lastName,
        image,
      },
    })

    if (createdUser) {
      return {
        status: 200,
        message: "User successfully created",
        id: createdUser.id,
      }
    }

    return {
      status: 400,
      message: "User could not be created! Try again!",
    }
  } catch {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again!",
    }
  }
}
