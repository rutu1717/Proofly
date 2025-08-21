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
  const [loading,setLoading] = useState(true);
  const [avgRating,setavgRating]=useState(0);
  const [totalTestimonials, setTotalTestimonials] = useState(0)
  useEffect(() => {
    async function getspaces() {
      setLoading(true);
      const res = await fetch("/api/spaces", {
        method: "GET",
      })
      if (res.ok) {
        const data = await res.json()
        console.log(typeof data)
        console.log(data)
        setSpaces(data)
        setLoading(false);
      }

    }
    async function getTotalTestimonials(){
      const response = await fetch("api/testimonials",{
        method:"GET"
      })
      if(response.ok){
        const data = await response.json();
        setTotalTestimonials(data.count)
      }
    }
    async function getAvgRating(){
      const response = await fetch("api/testimonials",{
        method:"GET"
      })
      if(response.ok){
        const data = await response.json();
        var rating = 0;
        
        for (const testimonial of data.testimonials){
          rating += testimonial.rating;
          console.log("rating is",(rating))
        }
        setavgRating(rating/data.count);
        console.log(rating/data.count)
      }
    }
    getspaces()
    getTotalTestimonials()
    getAvgRating()
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
              <div className="text-3xl font-bold text-white">{totalTestimonials}</div>
              {/* <p className="text-xs text-gray-400">+22% from last month</p> */}
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{avgRating}</div>
              {/* <p className="text-xs text-gray-400">+0.2 from last month</p> */}
            </CardContent>
          </Card>
{/* 
          <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Positive Sentiment</CardTitle>
              <ThumbsUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">92%</div>
              <p className="text-xs text-gray-400">+3% from last month</p>
            </CardContent>
          </Card> */}

          {/* <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Unique Customers</CardTitle>
              <Users className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">138</div>
              <p className="text-xs text-gray-400">+18% from last month</p>
            </CardContent>
          </Card> */}
        </div>
      </div>

      <div className="mr-7 ml-7 pb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight mb-6 text-white">Spaces</h1>
          <Button
            onClick={() => setOpen(true)}
            className="cursor-pointer mb-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold hover:scale-105 transition-all duration-300"
          >
            <Plus className="h-4 w-4" /> Create a New Space
          </Button>
        </div>

        <div className="border border-gray-800 bg-gray-950 rounded-lg shadow-sm p-6 w-full h-72 items-center justify-center gap-4">
        {loading ? (
              <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-3 text-gray-400">Loading spaces...</span>
            </div>
            )
          : spaces.length === 0 ? (
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
