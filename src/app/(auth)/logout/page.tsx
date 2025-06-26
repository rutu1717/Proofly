'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {Card,CardContent} from "@/components/ui/card";
import { LogOut } from "lucide-react";
const LogoutPage =  () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=> router.push("/"), 2000);
    }, []);
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
          <Card className="w-[350px]">
              <CardContent className="pt-6 flex flex-col items-center gap-4">
                  <LogOut className="h-12 w-12 text-muted-foreground" />
                  <div className="text-center space-y-2">
                      <h2 className="text-2xl font-semibold tracking-tight">Logged Out</h2>
                      <p className="text-sm text-muted-foreground">
                          You have been successfully logged out. Redirecting...
                      </p>
                  </div>
              </CardContent>
          </Card>
      </div>
  );
};

export default LogoutPage;