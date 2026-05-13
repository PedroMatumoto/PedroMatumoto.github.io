import { notFound } from "next/navigation";
import { viagensData } from "@/data/hobbies";
import TripGallery from "./TripGallery";

export function generateStaticParams() {
  return viagensData.map((trip) => ({ slug: trip.slug }));
}

export default async function TripGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = viagensData.find((t) => t.slug === slug);
  if (!trip) notFound();
  return <TripGallery trip={trip} />;
}
