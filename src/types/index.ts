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
  dist?: string;
  instagramUrl?: string;
  mapsUrl?: string;
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

export interface HouseManualItem {
  id: string;
  title: string;
  steps: string[];
}

export interface HouseRulesConfig {
  intro: string;
  petsAllowed: boolean;
  petsNote: string;
  maxPets: number;
  eventsAllowed: boolean;
  smokingAllowed: boolean;
  quietHoursEnabled: boolean;
  quietHoursStart: string;
  quietHoursEnd: string;
  commercialPhotographyAllowed: boolean;
  maxGuests: number;
  checkInSummary: string;
  checkOutSummary: string;
  additionalRules: string;
}

export interface PropertyTypeConfig {
  category: string;
  type: string;
  typeNote: string;
  listingType: string;
  listingTypeNote: string;
  sizeSqm: number;
  sizeUnit: string;
  sizeNote: string;
}
