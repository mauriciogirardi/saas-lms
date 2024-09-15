"use client"

import { GROUPLE_CONSTANTS } from "@/app/constants"
import { useAuthSignIn } from "@/hooks/use-auth-sign-in"
import { FormGenerator } from "../global/form-generator"
import { Loader } from "../global/loader"
import { Button } from "../ui/button"

export function SignInForm() {
  const { errors, isPending, onAuthenticationUser, register } = useAuthSignIn()

  return (
    <form className="flex flex-col gap-3 mt-10" onSubmit={onAuthenticationUser}>
      {GROUPLE_CONSTANTS.signInForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
        />
      ))}

      <Button type="submit" className="mt-5">
        <Loader loading={isPending}>Sign In With Email</Loader>
      </Button>
    </form>
  )
}
