"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RedirectButton } from "@/components/ui/RedirectButton"

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Verify your email</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We've sent a verification email to verify your email address.
        </p>
      </div>
      <div className="space-y-4">
        <RedirectButton />
      </div>
    </div>
  )
}