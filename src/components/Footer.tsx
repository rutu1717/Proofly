// src/components/ui/Footer.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith("/dashboard")) return null

  return (
    <footer className="mt-auto text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400">
          © {new Date().getFullYear()} Proofly
        </div>
        <div className="flex items-center gap-6">
          <Link href="/legal" className="text-gray-400 hover:text-emerald-400 transition-colors">
            Legal
          </Link>
          <a href="mailto:kruturaj96@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}