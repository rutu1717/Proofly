import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Settings,
  MessageSquare,
  LayoutDashboard,
  Code,
  PlusCircle,
  Bell,
  User,
} from "lucide-react";
import Logout from "@/components/Logout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-bold text-xl"
          >
            <span className="h-6 w-6 rounded-full bg-purple-600"></span>
            <span>TestiTrack</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Logout/>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 p-4">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start gap-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary bg-muted"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/testimonials"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <MessageSquare className="h-4 w-4" />
                  Testimonials
                </Link>
                <Link
                  href="/dashboard/collection"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <PlusCircle className="h-4 w-4" />
                  Collection Pages
                </Link>
                <Link
                  href="/dashboard/integrations"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Code className="h-4 w-4" />
                  Integrations
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Link>
                <div className="flex items-center gap-3 rounded-lg px-1 py-1 text-muted-foreground transition-all hover:text-primary">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
