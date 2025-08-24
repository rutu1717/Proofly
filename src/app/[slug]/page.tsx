import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import TestimonialForm from "./TestimonialForm"

export default async function SpacePage({ params }: { params: { slug: string } }) {
  const space = await prisma.space.findUnique({
    where: { slug: params.slug },
  })

  if (!space) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
           
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">{space.header}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{space.description}</p>
          </div>
        </div>

        {/* Testimonial Form */}
        <TestimonialForm spaceId={space.id} />

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Powered by <span className="text-emerald-400 font-semibold">TestiTrack</span>
          </p>
        </div>
      </div>
    </div>
  )
}
