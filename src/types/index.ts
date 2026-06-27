export interface Booking {
  id: string;
  token: string;
  guestName: string;
  guestCount: number;
  checkIn: string;
  checkOut: string;
  pinCode: string;
  bookingRef: string;
  wifiSsid?: string;
  wifiPassword?: string;
}

export type TabId = "home" | "arrival" | "smart" | "guide" | "help";

export interface NearbyPlace {
  tag: string;
  name: string;
  kind: string;
  dist: string;
}

export interface SmartDevice {
  id: string;
  short: string;
  name: string;
  sub: string;
  desc: string;
  phrase: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BedInfo {
  room: string;
  detail: string;
}

export interface CheckoutStep {
  n: string;
  t: string;
}

export interface CctvCamera {
  name: string;
  description: string;
  status: "guest-controllable" | "always-on";
}
