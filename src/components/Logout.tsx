"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export default function Logout() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  )
}
