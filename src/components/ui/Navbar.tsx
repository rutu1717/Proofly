"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
interface NavbarProps {
  user: any;
  onLogout: () => void;
  isLoading?: boolean;
}
export function Navbar({ user, onLogout, isLoading=false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await onLogout();
    setIsOpen(false);
    router.push("/");
  };
  return (
    <nav className="bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg"></span>
            </div>
            <span className="text-white font-bold text-xl">Proofly</span>
          </Link>
          {/* Auth Buttons - Always visible on mobile and desktop */}
          {user && (
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 bg-black/80 backdrop-blur-sm border-2 border-gray-500 text-white hover:bg-gray-800 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg shadow-lg"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          )}
          {!user && (
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                asChild
                size="sm"
                className="bg-black/80 backdrop-blur-sm border-2 border-gray-500 text-white hover:bg-gray-800 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300 px-4 py-2 rounded-lg shadow-lg"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-medium"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
