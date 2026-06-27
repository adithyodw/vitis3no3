import type {
  BedInfo,
  CheckoutStep,
  CctvCamera,
  FaqItem,
  NearbyPlace,
  SmartDevice,
} from "@/types";
import cms from "@/data/cms.json";

export const propertyConfig = {
  name: "Orchard Park Vitis 3 No.3",
  shortName: "Orchard Park",
  title: "Smart Home Villa",
  subtitle: "Tech-savvy villa · 2 bedrooms · 1 loft",
  welcomeTitle: "Welcome to Orchard Park Batam",
  welcomeSubtitle: "Your stay begins here.",
  location: "Orchard Park · Batam",
  address: {
    line1: "Orchard Park Vitis 3 No.3",
    line2: "Jl. Orchard Boulevard, Belian",
    line3: "Batam Kota, Kepulauan Riau 29444",
  },
  googleMapsUrl: "https://g.co/kgs/iFXw64",
  airbnbListingUrl: "https://airbnb.com.sg/h/batamsmarthome",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  sizeSqm: 130,
  bedrooms: 2,
  maxGuests: 4,
  features: [
    "130 sqm",
    "Private Garden",
    "Keyless Entry",
    "Google Home",
    "Samsung 65\" Smart TV",
    "Klipsch Home Theatre",
    "Bose Audio",
    "Netflix included",
    "High Speed WiFi",
    "Air Purifier",
    "Luxury Bathtub",
    "Smart Lighting",
    "Smart AC",
    "Remote Fan",
    "Cordless Vacuum",
  ],
  securityNote:
    "Tell security: \"I'm staying at Orchard Park Vitis 3 No.3.\" They may photograph your ID — you do not need to hand over your identification.",
  facilities: {
    items: ["Swimming pool", "Gym", "Clubhouse"],
    feeNote:
      "Day-use fee approximately USD 5 / person, payable at the clubhouse.",
    distanceNote: "Walking distance within Orchard Park",
  },
  guestSupplies: {
    towels: 4,
    toiletries: 4,
    maxGuests: 4,
  },
  bathrooms: {
    master:
      "Hot water, luxury bathtub & premium toiletries.",
    common: "No water heater.",
  },
  entertainment: [
    "Netflix included",
    "Samsung Smart TV",
    "Klipsch Theatre",
    "Bose Speakers",
    "AirPlay Supported",
  ],
  houseRules: cms.houseRules,
  smokingPenaltyUsd: 300,
  cctv: [
    {
      name: "Living room camera",
      description:
        "You may switch it OFF during your stay. Please switch it back ON before checkout.",
      status: "guest-controllable",
    },
    {
      name: "Garage camera",
      description: "Always on, for security purposes only.",
      status: "always-on",
    },
  ] satisfies CctvCamera[],
  beds: [
    { room: "Master bedroom", detail: "King bed · ensuite bathroom" },
    { room: "Bedroom 2", detail: "Queen bed" },
    { room: "Loft", detail: "Tatami queen bed" },
  ] satisfies BedInfo[],
  checkout: [
    { n: "1", t: "Turn off all air conditioning" },
    { n: "2", t: "Turn off the lights" },
    { n: "3", t: "Bag and dispose of trash outside" },
    { n: "4", t: "Switch the living room camera back ON" },
    { n: "5", t: "Close the door — the smart lock secures itself" },
  ] satisfies CheckoutStep[],
  smartDevices: [
    {
      id: "lights",
      short: "LITE",
      name: "Smart lighting",
      sub: "Every room, voice or app",
      desc: "All lights respond to Google Home and the wall switches. Tap a switch once for on/off; press and hold to dim.",
      phrase: '"Hey Google, turn off the living room lights."',
    },
    {
      id: "ac",
      short: "AC",
      name: "Air conditioning",
      sub: "Climate in every bedroom",
      desc: "Set your ideal temperature by voice or with the remote on each nightstand. We recommend 24°C for comfortable sleep.",
      phrase: '"Hey Google, set the bedroom AC to 24 degrees."',
    },
    {
      id: "fan",
      short: "FAN",
      name: "Ceiling fans",
      sub: "Remote controlled",
      desc: "Each fan has a remote on the nearby wall mount, or just ask Google to adjust the speed.",
      phrase: '"Hey Google, turn on the bedroom fan."',
    },
    {
      id: "google",
      short: "GH",
      name: "Google Home",
      sub: "Voice assistant hub",
      desc: "Say \"Hey Google\" to control lights, climate, entertainment, and the robot vacuum throughout the villa.",
      phrase: '"Hey Google, good morning."',
    },
    {
      id: "tv",
      short: "TV",
      name: 'Samsung 65" Smart TV',
      sub: "Netflix included",
      desc: "Netflix is already signed in. Press the home button on the remote, or cast from your phone via AirPlay.",
      phrase: '"Hey Google, play Netflix on the TV."',
    },
    {
      id: "audio",
      short: "BOSE",
      name: "Audio & home theatre",
      sub: "Klipsch · Bose · AirPlay",
      desc: "Stream to the Bose speakers or the Klipsch home theatre over AirPlay. Keep the volume neighbour-friendly after 10 PM.",
      phrase: '"Hey Google, play relaxing music."',
    },
    {
      id: "vac",
      short: "VAC",
      name: "Robot vacuum",
      sub: "Cordless, on demand",
      desc: "A cordless robot vacuum keeps the villa tidy. Start it anytime — it returns to its dock automatically.",
      phrase: '"Hey Google, start vacuuming."',
    },
  ] satisfies SmartDevice[],
  nearby: cms.nearby satisfies NearbyPlace[],
  faqs: cms.faqs satisfies FaqItem[],
} as const;

export const siteConfig = {
  host: {
    name: process.env.NEXT_PUBLIC_HOST_NAME ?? "Anya",
    title: process.env.NEXT_PUBLIC_HOST_TITLE ?? "Superhost",
    airbnbMessageUrl:
      process.env.NEXT_PUBLIC_HOST_AIRBNB_MESSAGE_URL ??
      "https://www.airbnb.com/messaging",
    whatsapp: process.env.NEXT_PUBLIC_HOST_WHATSAPP ?? "6281234567890",
  },
  securityPhone: process.env.NEXT_PUBLIC_SECURITY_PHONE ?? "+6277840000",
  emergencyPhone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE ?? "112",
  defaultWifi: {
    ssid: process.env.DEFAULT_WIFI_SSID ?? "OrchardPark_5G",
    password: process.env.DEFAULT_WIFI_PASSWORD ?? "Stay@Orchard2026",
  },
  demoToken: process.env.DEMO_BOOKING_TOKEN ?? "demo",
};
