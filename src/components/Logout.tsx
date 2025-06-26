"use client"
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";
const Logout = ()=>{
    return (
        <Button className="cursor-pointer" onClick={()=>{
            signout();
        }}>
            Logout
        </Button>
    )
}
export default Logout;