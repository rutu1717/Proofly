"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Star, ThumbsUp, Users, Plus } from "lucide-react"
import { DialogDemo } from "./Dialogspace"
import { useEffect, useState } from "react"

type space = {
  id: string
  name: string
  header: string
  description: string
  slug: string
}

export default function DashboardPage() {
  const [open, setOpen] = useState(false)
  const [spaces, setSpaces] = useState<space[]>([])

  useEffect(() => {
    async function getspaces() {
      const res = await fetch("/api/spaces", {
        method: "GET",
      })
      if (res.ok) {
        const data = await res.json()
        console.log(typeof data)
        console.log(data)
        setSpaces(data)
      }
    }

    getspaces()
  }, [])

  return (
    <div className="min-h-1/2 bg-black text-white ">
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Testimonials</CardTitle>
              <MessageSquare className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">142</div>
              <p className="text-xs text-gray-400">+22% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4.8</div>
              <p className="text-xs text-gray-400">+0.2 from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Positive Sentiment</CardTitle>
              <ThumbsUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">92%</div>
              <p className="text-xs text-gray-400">+3% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Unique Customers</CardTitle>
              <Users className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">138</div>
              <p className="text-xs text-gray-400">+18% from last month</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mr-7 ml-7 pb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight mb-6 text-white">Spaces</h1>
          <Button
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-emerald-500 hover:bg-emerald-400 text-black font-semibold hover:scale-105 transition-all duration-300"
          >
            <Plus className="h-4 w-4" /> Create a New Space
          </Button>
        </div>

        <div className="border border-gray-800 bg-gray-950 rounded-lg shadow-sm p-6 w-full h-72 items-center justify-center gap-4">
          {spaces.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Plus className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="font-bold text-white">No spaces yet</h2>
              <p className="text-gray-400 text-sm">Create your first space to start collecting testimonials</p>
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
              {spaces.map((space) => (
                <Link key={space.id} href={`/${space.slug}`}>
                  <Card className="p-1 max-w-xs w-full bg-gray-900 border-gray-800 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardHeader className="p-3 pb-2">
                      <CardTitle className="text-base text-white">{space.name}</CardTitle>
                      <CardDescription className="text-xs text-gray-400">{space.header}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
          <DialogDemo open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  )
}
