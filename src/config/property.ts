import type {
  BedInfo,
  CheckoutStep,
  FaqItem,
  HouseManualItem,
  HouseRulesConfig,
  NearbyPlace,
  PropertyTypeConfig,
  SmartDevice,
} from "@/types";
import cms from "@/data/cms.json";

export const propertyConfig = {
  name: "Orchard Park Vitis 3 No. 3",
  shortName: "Orchard Park",
  title: "[Smart Home] - Tech-Savvy Villa: 2-Bedroom",
  subtitle: "2-bedroom house · 1 loft · entire place",
  welcomeTitle: "Welcome to Your Stay",
  welcomeSubtitle: "Your stay begins here.",
  location: "Orchard Park · Batam",
  description:
    "This is Airbnb. If you're seeking luxury and premium amenities, please consider a hotel. Airbnb is about sharing someone's home, not a super-premium hotel experience.",
  layoutNote: "Parties and events are strictly prohibited.",
  address: {
    line1: "Orchard Park Vitis 3 No. 3",
    line2: "Jl. Orchard Boulevard, Belian",
    line3: "Kec. Batam Kota, Kota Batam",
    line4: "Kepulauan Riau 29444",
    full: "Jalan Orchard Boulevard, Belian, Kecamatan Batam Kota, Kepulauan Riau, 29444, Indonesia",
  },
  googleMapsUrl: "https://g.co/kgs/iFXw64",
  airbnbListingUrl: "https://airbnb.com.sg/h/batamsmarthome",
  checkInTime: "2:00 PM",
  checkInEnd: "Flexible",
  checkOutTime: "12:00 PM",
  checkOutNote:
    "Checkout is strict at 12:00 PM. Our cleaning team will arrive promptly at noon to prepare the home for the next guest.",
  pinSuffix: "#",
  pinInstruction:
    "Enter the PIN code at the main entrance keypad, then press #. Keep your PIN confidential and do not share it with anyone.",
  sizeSqm: 130,
  bedrooms: 2,
  loft: 1,
  maxGuests: 4,
  propertyType: {
    category: "House",
    type: "Villa",
    typeNote: "A luxury home that may have indoor-outdoor spaces, gardens, and pools.",
    listingType: "Entire place",
    listingTypeNote:
      "Guests have the whole place to themselves. This usually includes a bedroom, a bathroom and a kitchen.",
    sizeSqm: 130,
    sizeUnit: "Square metres",
    sizeNote: "The amount of indoor space that's available to guests.",
  } satisfies PropertyTypeConfig,
  features: [
    "Keyless entry using your own PIN code",
    "Spacious 130㎡ home",
    "Private garden",
    "Smart lighting with color-changing lights",
    "Smart air conditioning",
    "Remote-controlled ceiling fan",
    "Cordless vacuum cleaner",
    "Air purifier",
    "Premium toiletries",
    "Bathtub",
    "Hot water (master bathroom only)",
  ],
  entertainment: [
    "65-inch Samsung Smart TV (AirPlay supported)",
    "Netflix included",
    "High-speed Wi-Fi",
    "Klipsch Home Theatre",
    "Bose Sound System",
  ],
  securityDescription:
    "Located inside a fully secured neighborhood with 24/7 security personnel.",
  googleHomeExample: '"Hey Google, turn off the lights."',
  guestSupplies: {
    towels: 4,
    toiletries: 4,
    maxGuests: 4,
  },
  guestAccess: [
    "Entire house",
    "Bedrooms",
    "Bathrooms",
    "Kitchen",
    "Living room",
    "Dining area",
    "Private garden",
    "Smart home devices",
  ],
  hostInteraction:
    "I won't be available in person. Please contact me anytime through Airbnb messaging if you need assistance. The property is located in a secure neighborhood with 24-hour security.",
  facilities: {
    items: ["Swimming Pool", "Gym"],
    feeNote: "Approximate fee: USD $5 per person.",
    distanceNote: "Clubhouse facilities within Orchard Park",
  },
  bathrooms: {
    master: "Attached bathroom with water heater, bathtub, and hot water.",
    common: "No water heater.",
  },
  beds: [
    {
      room: "Master bedroom",
      detail: "King-size bed · attached bathroom · water heater",
    },
    { room: "Common bedroom", detail: "Queen-size bed" },
    { room: "Loft", detail: "Tatami Queen-size bed" },
  ] satisfies BedInfo[],
  directionsIntro: "Welcome to Orchard Park Batam.",
  securityNote:
    "If security requests information, simply let them know that you are a guest staying at Vitis 3 No. 3. Security may take a photo of your identification for registration purposes. No need to hand over your ID.",
  checkInMethod:
    "Guests enter the property using the keypad located at the main entrance. Simply enter the provided PIN code followed by \"#\".",
  houseRulesConfig: cms.houseRulesConfig as HouseRulesConfig,
  houseManual: cms.houseManual as HouseManualItem[],
  neighborhoodDescription: cms.neighborhoodDescription,
  checkout: [
    { n: "1", t: "Gather used towels" },
    { n: "2", t: "Throw away rubbish" },
    { n: "3", t: "Turn off lights" },
    { n: "4", t: "Turn off air conditioning" },
    { n: "5", t: "Lock all doors" },
    { n: "6", t: "Ensure the property is secure" },
  ] satisfies CheckoutStep[],
  smartDevices: [
    {
      id: "lights",
      short: "LITE",
      name: "Smart lighting",
      sub: "Color-changing lights",
      desc: "Control lights with Google Home or the wall switches.",
      phrase: '"Hey Google, turn on the lights."',
    },
    {
      id: "ac",
      short: "AC",
      name: "Smart air conditioning",
      sub: "Climate control",
      desc: "Adjust temperature by voice or remote.",
      phrase: '"Hey Google, turn off the AC."',
    },
    {
      id: "fan",
      short: "FAN",
      name: "Ceiling fan",
      sub: "Remote controlled",
      desc: "Use the remote control mounted on the wall.",
      phrase: '"Hey Google, turn on the fan."',
    },
    {
      id: "google",
      short: "GH",
      name: "Google Home",
      sub: "Voice assistant",
      desc: "Say \"Hey Google\" to control supported smart home devices.",
      phrase: '"Hey Google, play music."',
    },
    {
      id: "tv",
      short: "TV",
      name: "Samsung 65\" Smart TV",
      sub: "Netflix · AirPlay",
      desc: "Netflix is included. AirPlay is supported from your devices.",
      phrase: '"Hey Google, play Netflix on the TV."',
    },
    {
      id: "audio",
      short: "BOSE",
      name: "Bose Sound System",
      sub: "Klipsch Home Theatre",
      desc: "Stream via AirPlay or connect stereo speakers using Bluetooth.",
      phrase: '"Hey Google, play relaxing music."',
    },
    {
      id: "vac",
      short: "VAC",
      name: "Cordless vacuum",
      sub: "On demand",
      desc: "A cordless vacuum cleaner is available for your use.",
      phrase: '"Hey Google, start vacuuming."',
    },
  ] satisfies SmartDevice[],
  nearby: cms.nearby as NearbyPlace[],
  faqs: cms.faqs as FaqItem[],
} as const;

export const siteConfig = {
  host: {
    airbnbMessageUrl:
      process.env.NEXT_PUBLIC_HOST_AIRBNB_MESSAGE_URL ??
      "https://www.airbnb.com/messaging",
  },
  emergencyPhone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE ?? "112",
  defaultWifi: {
    ssid: process.env.DEFAULT_WIFI_SSID ?? "VITIS 3/3",
    password: process.env.DEFAULT_WIFI_PASSWORD ?? "tanyasaya",
  },
  defaultPinCode: process.env.DEFAULT_PIN_CODE ?? "2026888",
  demoToken: process.env.DEMO_BOOKING_TOKEN ?? "demo",
};
