import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
function generateSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}   
export async function POST(request: Request){
const {name , header, description} = await request.json();
const slug = generateSlug(name);
const space = await prisma.space.create({
    data: {name,header,description,slug},
})
return NextResponse.json(space,{status:201});
}
export async function GET(){
    const spaces = await prisma.space.findMany();
    return NextResponse.json(spaces);
}