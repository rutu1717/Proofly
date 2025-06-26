'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/LoginLogoutButton";

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl text-white font-bold">
            TestiTrack
          </Link>

          <div className="flex items-center space-x-4">
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
}