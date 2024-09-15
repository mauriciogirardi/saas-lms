import { toast } from "@/components/ui/use-toast"
import { useSignIn } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email("You must give a valid email."),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long." })
    .max(64, {
      message: "You password can not be longer then 64 caracteres long.",
    })
    .refine(
      (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
      "Password should contain only alphabets and numbers.",
    ),
})

export type SignInFormData = z.infer<typeof signInSchema>

export function useAuthSignIn() {
  const { isLoaded, setActive, signIn } = useSignIn()
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  })

  const onClerkAuth = async (email: string, password: string) => {
    if (!isLoaded) {
      return toast({
        title: "Error",
        description: "Oops! something went wrong.",
        variant: "destructive",
      })
    }

    try {
      const authenticated = await signIn.create({
        identifier: email,
        password,
      })

      if (authenticated.status === "complete") {
        reset()
        await setActive({ session: authenticated.createdSessionId })

        toast({
          title: "Success",
          description: "Welcome back!",
          variant: "success",
        })

        router.push("/callback/sign-in")
      }
    } catch (error: any) {
      if (error?.errors[0]?.code === "form_password_incorrect") {
        toast({
          title: "Error",
          description: "email/password is incorrect try again.",
          variant: "destructive",
        })
      }
    }
  }

  const { mutate: initialLoginFlow, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      onClerkAuth(email, password),
  })

  const onAuthenticationUser = handleSubmit(async ({ email, password }) => {
    initialLoginFlow({ email, password })
  })

  return {
    register,
    errors,
    onAuthenticationUser,
    isPending,
  }
}
