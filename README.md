# Orchard Park Concierge

Premium digital guest check-in for **Orchard Park Vitis 3 No.3** — a production-ready Next.js concierge that guests open from their Airbnb message link.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- PWA (installable, offline cache for static assets)
- Dark / light mode

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

- Landing: [http://localhost:3000](http://localhost:3000)
- Demo guest link: [http://localhost:3000/checkin/demo](http://localhost:3000/checkin/demo)
- Sample booking: [http://localhost:3000/checkin/9a82hd92j](http://localhost:3000/checkin/9a82hd92j)

## Guest links

Each guest receives a unique URL:

```
/checkin/{token}
```

No login required. The token loads their booking (name, dates, PIN, guest count, Wi-Fi).

## Host configuration (no code)

| What to edit | Where |
|---|---|
| PIN, guest name, dates, booking ref | `src/data/bookings.json` |
| Wi-Fi defaults | `.env.local` → `DEFAULT_WIFI_*` |
| Host name, WhatsApp, security phone | `.env.local` → `NEXT_PUBLIC_*` |
| House rules, FAQ, nearby places, amenities | `src/config/property.ts` |
| Hero & property photos | `public/assets/` |

### Adding a booking

Add an entry to `src/data/bookings.json`:

```json
{
  "your-secure-token": {
    "id": "booking-002",
    "guestName": "Alex",
    "guestCount": 2,
    "checkIn": "2026-07-01T14:00:00+07:00",
    "checkOut": "2026-07-04T12:00:00+07:00",
    "pinCode": "12345",
    "bookingRef": "ABCD-1234"
  }
}
```

Send the guest: `https://your-domain.com/checkin/your-secure-token`

## Deploy

Works on Vercel, Netlify, or any Node host.

```bash
npm run build
npm start
```

Set environment variables from `.env.example` in your hosting dashboard.

## Design reference

The original Claude design mockup is preserved in `design/Orchard Park Concierge.dc.html`.

## Repository

[github.com/adithyodw/vitis3no3](https://github.com/adithyodw/vitis3no3)
