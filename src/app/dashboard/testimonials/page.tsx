"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Download, Search, Star, Edit, Trash2, CheckCircle, XCircle, MessageSquare } from "lucide-react"
import { Dialog } from "@radix-ui/react-dialog"
import TestimonialEmbedDialog from "./dialogspace"
 
type Space = {
  id: string
  name: string
  slug: string
}

type Testimonial = {
  id: string
  name: string
  email: string
  company?: string
  rating: number
  content: string
  positon:string
  createdAt: string
  spaceId: string
  approved:string
}

export default function TestimonialsPage() {
  const [open, setOpen] = useState(false)
  const [spaces, setSpaces] = useState<Space[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [selectedSpace, setSelectedSpace] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  // Fetch spaces on component mount
  useEffect(() => {
    async function fetchSpaces() {
      try {
        const response = await fetch("/api/spaces")
        if (response.ok) {
          const data = await response.json()
          setSpaces(data)
          if (data.length > 0) {
            setSelectedSpace(data[0].id) // Select first space by default
          }
        }
      } catch (error) {
        console.error("Error fetching spaces:", error)
      }
    }
    fetchSpaces()
  }, [])

  // Fetch testimonials when space changes
  useEffect(() => {
    async function fetchTestimonials() {
      if (!selectedSpace) return

      setLoading(true)
      try {
        const response = await fetch(`/api/testimonials?spaceId=${selectedSpace}`)
        if (response.ok) {
          const data = await response.json()
          setTestimonials(data.testimonials)
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [selectedSpace])


  // Filter testimonials based on search
  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleApprove = async (testimonialId: string) => {
    try {
      const response = await fetch(`/api/testimonials/${testimonialId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: true }),
      })
      // if (response.ok) {
      //   setTestimonials((prev) => prev.map((t) => (t.id === testimonialId ? { ...t, approved: true } : t)))
      // }
    } catch (error) {
      console.error("Error approving testimonial:", error)
    }
  }

  const handleReject = async (testimonialId: string) => {
    try {
      const response = await fetch(`/api/testimonials/${testimonialId}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setTestimonials((prev) => prev.filter((t) => t.id !== testimonialId))
      }
    } catch (error) {
      console.error("Error rejecting testimonial:", error)
    }
  }

  const selectedSpaceName = spaces.find((space) => space.id === selectedSpace)?.name || "Select Space"

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex-1 space-y-6 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-white">Testimonials</h1>
          <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">
            Request New Testimonials
          </Button>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Manage Testimonials</CardTitle>
            <CardDescription className="text-gray-400">
              View, approve, and organize all your customer testimonials
            </CardDescription>

            {/* Space Selector and Search */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Space</label>
                <Select value={selectedSpace} onValueChange={setSelectedSpace}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Choose a space" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {spaces.map((space) => (
                      <SelectItem key={space.id} value={space.id} className="text-white hover:bg-gray-700">
                        {space.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search testimonials..."
                    className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2 items-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {spaces.length===0 ? (
             
               <div className="text-center py-12">
                <MessageSquare className="mx-auto h-16 w-16 text-gray-600 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No spaces found</h3>
                <p className="text-gray-400">
                  You don't have any spaces yet. Please create a space to start collecting testimonials.
                </p>
              </div>
            ) : loading ?(
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-400">Loading testimonials...</span>
              </div>
            ) : filteredTestimonials.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="mx-auto h-16 w-16 text-gray-600 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No testimonials found</h3>
                <p className="text-gray-400">
                  {selectedSpace
                    ? "This space doesn't have any testimonials yet."
                    : "Please select a space to view testimonials."}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {filteredTestimonials.map((Testimonial) => (
                  <Card
                    key={Testimonial.id}
                    className="bg-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      {/* Header with name and rating */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-white text-lg">{Testimonial.name}</h3>
                          {Testimonial.company && <p className="text-gray-400 text-sm">{Testimonial.company}</p>}
                          <p className="text-gray-500 text-xs">{Testimonial.email}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Testimonial.rating ? "text-emerald-400 fill-emerald-400" : "text-gray-600"
                                }`}
                              />
                            ))}
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <p className="text-gray-300 mb-4 leading-relaxed break-words">{Testimonial.content}</p>
                      {/* Status and actions */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {Testimonial.approved ? (
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Approved</Badge>
                          ) : (
                            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                              Pending Review
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {!Testimonial.approved ? (
                            <>
                              <Button
                                size="sm"
                                onClick={()=>{setOpen(true)}}
                                className="bg-emerald-500 hover:bg-emerald-400 text-black h-8"
                              >
                                <CheckCircle className="mr-1 h-4 w-4" />
                                Embed
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleReject(Testimonial.id)}
                                className="border-red-500 text-red-400 hover:bg-red-500/10 h-8"
                              >
                                <XCircle className="mr-1 h-4 w-4" />
                                Reject
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 h-8"
                              >
                                <Edit className="mr-1 h-4 w-4" />
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleReject(Testimonial.id)}
                                className="border-red-500 text-red-400 hover:bg-red-500/10 h-8"
                              >
                                <Trash2 className="mr-1 h-4 w-4" />
                                Delete
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        <TestimonialEmbedDialog open={open} setOpen={setOpen} embedCode="
        ehe"/>
      </div>
    </div>
  )
}
