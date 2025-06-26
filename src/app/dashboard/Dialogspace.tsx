"use client";
import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface DialogDemoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function DialogDemo({ open, setOpen }: DialogDemoProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Create a New Space
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            After the Space is created, it will generate a dedicated page for
            collecting testimonials.
          </DialogDescription>
        </DialogHeader>
        {/* Space name */}
        <div>
          <label className="block font-medium">Space name *</label>
          <input
            type="text"
            className="mt-1 w-full border rounded p-2"
            required
          />
          <p className="text-sm text-gray-500">
            Public URL is: testimonial.to/your-space
          </p>
        </div>

        {/* Header title */}
        <div>
          <label className="block font-medium">Header title *</label>
          <input
            type="text"
            defaultValue="Would you like to give a shoutout for xyz?"
            className="mt-1 w-full border rounded p-2"
            required
          />
        </div>

        {/* Custom message */}
        <div>
          <label className="block font-medium">Your custom message *</label>
          <textarea
            className="mt-1 w-full border rounded p-2"
            rows={3}
            placeholder="Write a warm message to your customers..."
            required
          />
          <p className="text-sm text-gray-500">Markdown supported</p>
        </div>

        <DialogFooter>
          {/* <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose> */}
          <Button
            type="submit"
            className="w-full text-white rounded cursor-pointer p-2 font-semibold"
          >
            Create Space
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
