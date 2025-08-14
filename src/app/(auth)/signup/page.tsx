'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/auth-actions";

export default function SignUpForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (formData: FormData) => {
    const result = await signup(formData);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="mx-auto max-w-sm bg-black/95 backdrop-blur-sm border-2 border-gray-800 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Sign Up</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSignup}>
            <div className="grid gap-4">
              {error && (
                <div className="text-sm text-red-400 bg-red-950/80 p-3 rounded-md border border-red-800">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name" className="text-gray-300">First name</Label>
                  <Input
                    name="first-name"
                    id="first-name"
                    placeholder="Max"
                    required
                    className="bg-gray-950 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name" className="text-gray-300">Last name</Label>
                  <Input
                    name="last-name"
                    id="last-name"
                    placeholder="Robinson"
                    required
                    className="bg-gray-950 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-gray-950 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input 
                  name="password" 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-gray-950 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500 shadow-lg">
                Create an account
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-400 hover:text-emerald-300 underline font-medium">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}