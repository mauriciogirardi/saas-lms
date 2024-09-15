import { useSignIn, useSignUp } from "@clerk/nextjs"
import { OAuthStrategy } from "@clerk/types"

export function useGoogleAuth() {
  const { signIn, isLoaded: loadedSignIn } = useSignIn()
  const { signUp, isLoaded: loadedSignUp } = useSignUp()

  const signInWith = (strategy: OAuthStrategy) => {
    if (!loadedSignIn) return

    try {
      return signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/sign-in",
      })
    } catch (error) {
      console.error(error)
    }
  }

  const signUpWith = (strategy: OAuthStrategy) => {
    if (!loadedSignUp) return

    try {
      return signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/complete",
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    signInWith,
    signUpWith,
  }
}
