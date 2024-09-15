"use client"

import { GROUPLE_CONSTANTS } from "@/app/constants"
import { useAuthSignUp } from "@/hooks/use-auth-sign-up"
import dynamic from "next/dynamic"
import { FormGenerator } from "../global/form-generator"
import { Loader } from "../global/loader"
import { Button } from "../ui/button"

const OtpInput = dynamic(
  () =>
    import("@/components/global/otp-input").then(
      (component) => component.default,
    ),
  { ssr: false },
)

export function SignUpForm() {
  const {
    code,
    errors,
    setCode,
    register,
    creating,
    verifying,
    getValues,
    onGenerateCode,
    onInitiateUserRegistration,
  } = useAuthSignUp()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log("Submit event captured")
        onInitiateUserRegistration()
      }}
      className="flex flex-col gap-3 mt-10"
    >
      {verifying ? (
        <div className="flex justify-center mb-5">
          <OtpInput otp={code} setOtp={setCode} />
        </div>
      ) : (
        GROUPLE_CONSTANTS.signUpForm.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            register={register}
            errors={errors}
          />
        ))
      )}

      {verifying ? (
        <Button type="submit">
          <Loader loading={creating}>Sign Up with Email</Loader>
        </Button>
      ) : (
        <Button
          type="button"
          className="rounded-2xl"
          onClick={() =>
            onGenerateCode(getValues("email"), getValues("password"))
          }
        >
          <Loader loading={false}>Generate Code</Loader>
        </Button>
      )}
    </form>
  )
}
