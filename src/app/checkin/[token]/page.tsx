import { ConciergeApp } from "@/components/concierge/concierge-app";
import { getBookingByToken } from "@/lib/bookings";
import { propertyConfig } from "@/config/property";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ token: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params;
  const booking = await getBookingByToken(token);
  if (!booking) {
    return { title: "Check-in not found" };
  }
  return {
    title: `Welcome, ${booking.guestName.split(" ")[0]}`,
    description: `Your digital concierge for ${propertyConfig.name}. Check-in, Wi-Fi, smart home, and house guide.`,
    robots: { index: false, follow: false },
  };
}

export default async function CheckInPage({ params }: PageProps) {
  const { token } = await params;
  const booking = await getBookingByToken(token);

  if (!booking) {
    notFound();
  }

  return <ConciergeApp booking={booking} />;
}
