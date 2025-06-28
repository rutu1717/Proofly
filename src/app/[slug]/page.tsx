import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function SpacePage({ params }: { params: { slug: string } }) {
  const space = await prisma.space.findUnique({
    where: { slug: params.slug },
  });

  if (!space) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{space.header}</h1>
      <p className="text-gray-600 mb-6">{space.description}</p>
      {/* Add your testimonial form here */}
    </div>
  );
}