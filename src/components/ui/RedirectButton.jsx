'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function RedirectButton() {
  const router = useRouter();

  return (
    <Button 
      type="button"
      onClick={() => {
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }}
      className="w-full"
    >
      Go To Home
    </Button>
  );
}