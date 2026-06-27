import { readFileSync } from "fs";
import path from "path";
import type { Booking } from "@/types";
import { propertyConfig, siteConfig } from "@/config/property";

const bookingsPath = path.join(process.cwd(), "src/data/bookings.json");

function loadBookingsFile(): Record<string, Omit<Booking, "token">> {
  try {
    const raw = readFileSync(bookingsPath, "utf-8");
    return JSON.parse(raw) as Record<string, Omit<Booking, "token">>;
  } catch {
    return {};
  }
}

export function getDefaultBooking(token: string): Booking {
  const today = new Date();
  const checkIn = new Date(today);
  checkIn.setHours(14, 0, 0, 0);
  const checkOut = new Date(today);
  checkOut.setDate(checkOut.getDate() + 3);
  checkOut.setHours(12, 0, 0, 0);

  return {
    id: "default-booking",
    token,
    guestName: "Guest",
    guestCount: propertyConfig.maxGuests,
    checkIn: checkIn.toISOString(),
    checkOut: checkOut.toISOString(),
    pinCode: siteConfig.defaultPinCode,
    bookingRef: "CONFIRMED",
    wifiSsid: siteConfig.defaultWifi.ssid,
    wifiPassword: siteConfig.defaultWifi.password,
  };
}

export async function getBookingByToken(token: string): Promise<Booking | null> {
  if (!token) return null;

  const bookings = loadBookingsFile();
  const record = bookings[token];

  if (token === siteConfig.demoToken && !record) {
    return getDefaultBooking(token);
  }

  if (!record) return null;

  return {
    ...record,
    token,
    wifiSsid: record.wifiSsid ?? siteConfig.defaultWifi.ssid,
    wifiPassword: record.wifiPassword ?? siteConfig.defaultWifi.password,
    pinCode: record.pinCode ?? siteConfig.defaultPinCode,
  };
}
