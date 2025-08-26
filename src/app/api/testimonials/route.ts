import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(request: Request){
    const { name , email, company, position,rating , content,spaceId} = await request.json();
    const testimonials = await prisma.testimonial.create({
        data : {name,email,company,position,rating,content,spaceId}
    })
    console.log(testimonials);
    return NextResponse.json(testimonials,{status:201});
}
export async function GET(request : Request){
    const {searchParams} = new URL(request.url);
    const spaceId = searchParams.get("spaceId");
    const count = await prisma.testimonial.count();
    
    if(spaceId){
        const testimonials = await prisma.testimonial.findMany({
            where: {spaceId},
            orderBy:{createdAt:"desc"},
        })
        return NextResponse.json({testimonials,count},{status:201});
    }
    const testimonials = await prisma.testimonial.findMany({
        orderBy:{createdAt:"desc"}
    });
    return NextResponse.json({testimonials,count},{status:201});
}
export async function PATCH(request : Request){
    const {status} = await request.json();
    console.log("Status is"+status);
    const {searchParams} = new URL(request.url);
    const testimonialId = searchParams.get("testimonialId");
    if(testimonialId){
        const testimonial = await prisma.testimonial.update({
            where: { id: testimonialId },
            data: {
              status // Will only accept 'PENDING', 'APPROVED', or 'REJECTED'
            }
          });
          return NextResponse.json(testimonial,{status:201});
    }
    
    return NextResponse.json({message:"Testimonial ID is required"},{status:400});
}