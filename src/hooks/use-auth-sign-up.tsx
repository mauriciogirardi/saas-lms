import { onSignUpUser } from "@/app/(auth)/actions"
import { toast } from "@/components/ui/use-toast"
import { useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must bu at least 3 characters!" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must bu at least 3 characters!" }),
  email: z.string().email("You must give a valid email!"),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 7 characters long!" })
    .max(64, {
      message: "Your password can not be longer then 64 characters long!",
    })
    .refine((value) => /^[a-zA-A0-9_.-]*$/.test(value ?? ""), {
      message: "Password should contain only alphabets and numbers!",
    }),
})

export type SignUpFormData = z.infer<typeof signUpSchema>

export function useAuthSignUp() {
  const router = useRouter()

  const { setActive, isLoaded, signUp } = useSignUp()
  const [creating, setCreating] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [code, setCode] = useState("")

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  })

  const onGenerateCode = async (email: string, password: string) => {
    if (!isLoaded) {
      return toast({
        title: "Error",
        description: "Oops! something went wrong.",
        variant: "destructive",
      })
    }

    try {
      if (email && password) {
        await signUp?.create({
          emailAddress: getValues("email"),
          password: getValues("password"),
        })

        await signUp?.prepareEmailAddressVerification({
          strategy: "email_code",
        })

        setVerifying(true)
      } else {
        return toast({
          title: "Error",
          description: "No fields must be empty!",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2))
    }
  }

  const onInitiateUserRegistration = handleSubmit(async (values) => {
    if (!isLoaded) {
      return toast({
        title: "Error",
        description: "Oops! something went wrong",
        variant: "destructive",
      })
    }

    try {
      setCreating(true)
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status !== "complete") {
        return toast({
          title: "Error",
          description: "Oops! something went wrong, status in complete",
          variant: "destructive",
        })
      }

      if (completeSignUp.status === "complete") {
        if (!signUp.createdUserId) return
        const user = await onSignUpUser({
          firstName: values.firstName,
          lastName: values.lastName,
          clerkId: signUp.createdUserId,
          image: "",
        })

        reset()

        if (user.status === 200) {
          toast({
            title: "Success",
            description: user.message,
            variant: "success",
          })

          await setActive({
            session: completeSignUp.createdSessionId,
          })
          router.push(`/group/create`)
        }
        if (user.status !== 200) {
          toast({
            title: "Error",
            description: user.message + "action failed",
            variant: "destructive",
          })
          router.refresh
        }
        setCreating(false)
        setVerifying(false)
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2))
    }
  })

  return {
    register,
    errors,
    onGenerateCode,
    onInitiateUserRegistration,
    verifying,
    creating,
    code,
    setCode,
    getValues,
  }
}
