"use client"

import { type Dispatch, type SetStateAction, useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DialogDemoProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function DialogDemo({ open, setOpen }: DialogDemoProps) {
  const [name, setName] = useState("")
  const [header, setHeader] = useState("Would you like to give a shoutout for xyz?")
  const [description, setDescription] = useState("")

  async function PostSpaces() {
    console.log("Button Clicked")
    const space = { name: name, header: header, description: description }
    console.log(space)

    const res = await fetch("/api/spaces", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(space),
    })

    const data = await res.json()
    console.log(data)
    setOpen(false)
    window.location.reload()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">Create a New Space</DialogTitle>
          <DialogDescription className="text-gray-400">
            After the Space is created, it will generate a dedicated page for collecting testimonials.
          </DialogDescription>
        </DialogHeader>

        {/* Space name */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-300">Space name *</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="mt-1 w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            placeholder="Enter space name"
            required
          />
          <p className="text-sm text-gray-500">Public URL is: testimonial.to/your-space</p>
        </div>

        {/* Header title */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-300">Header title *</label>
          <input
            onChange={(e) => setHeader(e.target.value)}
            type="text"
            defaultValue="Would you like to give a shoutout for xyz?"
            className="mt-1 w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            required
          />
        </div>

        {/* Custom message */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-300">Description</label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            className="mt-1 w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
            rows={3}
            placeholder="Write a warm message to your customers..."
            required
          />
          <p className="text-sm text-gray-500">Markdown supported</p>
        </div>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => {
              PostSpaces()
            }}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Create Space
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
