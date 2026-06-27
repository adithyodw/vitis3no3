import { getBookingByToken } from "@/lib/bookings";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{ token: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { token } = await context.params;
  const booking = await getBookingByToken(token);

  if (!booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  return NextResponse.json({
    guestName: booking.guestName,
    guestCount: booking.guestCount,
    checkIn: booking.checkIn,
    checkOut: booking.checkOut,
    bookingRef: booking.bookingRef,
    pinCode: booking.pinCode,
    wifiSsid: booking.wifiSsid,
    wifiPassword: booking.wifiPassword,
  });
}
