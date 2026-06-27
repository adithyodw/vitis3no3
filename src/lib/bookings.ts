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

export function getDefaultGuestBooking(): Booking {
  return {
    id: "guest-booking",
    token: "guest",
    guestName: "Guest",
    guestCount: propertyConfig.maxGuests,
    checkIn: "",
    checkOut: "",
    pinCode: siteConfig.defaultPinCode,
    bookingRef: "",
    wifiSsid: siteConfig.defaultWifi.ssid,
    wifiPassword: siteConfig.defaultWifi.password,
  };
}

/** @deprecated Use getDefaultGuestBooking */
export function getDefaultBooking(token: string): Booking {
  return { ...getDefaultGuestBooking(), token };
}

export async function getBookingByToken(token: string): Promise<Booking | null> {
  if (!token) return null;

  const bookings = loadBookingsFile();
  const record = bookings[token];

  if (record) {
    return {
      ...record,
      token,
      wifiSsid: record.wifiSsid ?? siteConfig.defaultWifi.ssid,
      wifiPassword: record.wifiPassword ?? siteConfig.defaultWifi.password,
      pinCode: record.pinCode ?? siteConfig.defaultPinCode,
    };
  }

  if (token === siteConfig.legacyGuestToken) {
    return getDefaultGuestBooking();
  }

  return null;
}
