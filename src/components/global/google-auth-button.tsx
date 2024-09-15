"use client"

import { useGoogleAuth } from "@/hooks/use-google-auth"
import { GoogleIcon } from "@/icons/google"
import { Button } from "../ui/button"
import { Loader } from "./loader"

type GoogleAuthButtonProps = {
  method: "sign-up" | "sign-in"
}

export function GoogleAuthButton({ method }: GoogleAuthButtonProps) {
  const { signInWith, signUpWith } = useGoogleAuth()

  return (
    <Button
      {...(method === "sign-in"
        ? {
            onClick: () => signInWith("oauth_google"),
          }
        : {
            onClick: () => signUpWith("oauth_google"),
          })}
      variant="outline"
      className="w-full flex gap-3 bg-themeBlack border-themeGray"
    >
      <Loader loading={false}>
        <GoogleIcon />
        Google
      </Loader>
    </Button>
  )
}
