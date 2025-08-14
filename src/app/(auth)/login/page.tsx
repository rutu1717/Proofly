'use client';

import Link from "next/link"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/auth-actions"
import SignInWithGoogleButton from "./SignInWithGoogleButton"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (formData: FormData) => {
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-black/95 backdrop-blur-sm border-2 border-gray-800 shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleLogin}>
              <div className="grid gap-4">
                {error && (
                  <div className="text-sm text-red-400 bg-red-950/80 p-3 rounded-md border border-red-800">
                    {error}
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="h-10 bg-gray-950 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-300">Password</Label>
                    <Link href="#" className="text-sm text-emerald-400 hover:text-emerald-300 underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    className="h-10 bg-gray-950 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <Button type="submit" className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500 shadow-lg">
                  Login
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-black px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                <SignInWithGoogleButton/> 
              </div>
          </form>
          <div className="mt-6 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 underline font-medium">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}