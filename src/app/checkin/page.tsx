import { ConciergeApp } from "@/components/concierge/concierge-app";
import { getDefaultGuestBooking } from "@/lib/bookings";
import { propertyConfig } from "@/config/property";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome, Guest",
  description: `Your digital concierge for ${propertyConfig.name}.`,
  robots: { index: false, follow: false },
};

export default function CheckInPage() {
  const booking = getDefaultGuestBooking();
  return <ConciergeApp booking={booking} />;
}
