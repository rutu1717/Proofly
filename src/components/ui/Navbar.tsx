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
 
  const handleLogout = async () => {
    await onLogout();
    setIsOpen(false);
  };
  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg"></span>
            </div>
            <span className="text-white font-bold text-xl">Proofly</span>
          </Link>
          {/* Desktop Auth Buttons */}
          {user ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                asChild
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                <Button
                  variant="ghost"
                  asChild
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                >
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
