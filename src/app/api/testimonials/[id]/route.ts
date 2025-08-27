import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function PATCH(request : Request,
     { params }: { params: { id: string } } 
){
    const {status} = await request.json();
    console.log("Status is"+status);
    const testimonialId = params.id;
    if(testimonialId){
        console.log("Testimonial ID is"+testimonialId);
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
export async function DELETE(request : Request,
     { params }: { params: { id: string } } 
){
    
    const testimonialId = params.id;
    if(testimonialId){
        console.log("Testimonial ID is"+testimonialId);
        const testimonial = await prisma.testimonial.delete({
            where: { id: testimonialId },
          });
          return NextResponse.json(testimonial,{status:201});
    }
    
    return NextResponse.json({message:"Testimonial ID is required"},{status:400});
}