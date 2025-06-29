"use client"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Settings, MessageSquare, LayoutDashboard, Code, PlusCircle } from "lucide-react"
import Logout from "@/components/Logout"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  return (
    <div className="flex min-h-3/4 flex-col bg-black">
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-gray-950">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-bold text-xl text-white hover:text-emerald-400 transition-colors"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-500"></span>
            <span>TestiTrack</span>
          </Link>
          <div className="ml-auto cursor-pointer flex items-center gap-2">
            <Logout />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r border-gray-800 bg-gray-950 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 p-4">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start gap-2">
                <Link
                  href="/dashboard"
                  className={`... ${pathName === "/dashboard" ? "bg-emerald-900/40 text-emerald-400 flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-emerald-400 hover:bg-gray-800" : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-emerald-400 hover:bg-gray-800"}`}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/testimonials"
                  className={`... ${pathName.startsWith("/dashboard/testimonials") ? "bg-emerald-900/40 text-emerald-400 flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-emerald-400 hover:bg-gray-800" : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-emerald-400 hover:bg-gray-800"}`}
                >
                  <MessageSquare className="h-4 w-4" />
                  Testimonials
                </Link>
                <Link
                  href="/dashboard/collection"
                  className={`... ${pathName.startsWith("/dashboard/collection") ? "bg-emerald-900/40 text-emerald-400 flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-emerald-400 hover:bg-gray-800" : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-emerald-400 hover:bg-gray-800"}`}
                >
                  <PlusCircle className="h-4 w-4" />
                  Collection Pages
                </Link>
                <Link
                  href="/dashboard/integrations"
                  className={`... ${pathName.startsWith("/dashboard/integrations") ? "bg-emerald-900/40 text-emerald-400 flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-emerald-400 hover:bg-gray-800" : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-emerald-400 hover:bg-gray-800"}`}
                >
                  <Code className="h-4 w-4" />
                  Integrations
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className={`... ${pathName.startsWith("/dashboard/analytics") ? "bg-emerald-900/40 text-emerald-400 flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-emerald-400 hover:bg-gray-800" : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-emerald-400 hover:bg-gray-800"}`}
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Link>
                <div className="flex items-center gap-3 rounded-lg px-1 py-1 text-gray-300 transition-all hover:text-emerald-400">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 hover:border-emerald-500/50"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-black">{children}</main>
      </div>
    </div>
  )
}
