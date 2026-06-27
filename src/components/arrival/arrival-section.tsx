"use client";

import { Card, PremiumButton, SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { PropertyFeaturesCard } from "@/components/home/home-sections";
import { propertyConfig } from "@/config/property";
import type { Booking } from "@/types";
import { useState } from "react";

interface ArrivalSectionProps {
  booking: Booking;
}

export function ArrivalSection({ booking }: ArrivalSectionProps) {
  const [pinRevealed, setPinRevealed] = useState(true);
  const pinDigits = pinRevealed
    ? booking.pinCode.split("")
    : Array(booking.pinCode.length).fill("•");

  return (
    <div className="px-[18px] pt-[84px] pb-10">
      <SectionLabel>Getting in</SectionLabel>
      <SectionTitle>
        Arrival &<br />
        directions
      </SectionTitle>

      <Reveal>
        <PropertyFeaturesCard />
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 overflow-hidden">
          <div className="relative h-[170px] overflow-hidden bg-bg-2">
            <iframe
              title="Property location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${propertyConfig.address.line1}, ${propertyConfig.address.line2}, ${propertyConfig.address.line3}`,
              )}&z=15&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="p-[18px_20px]">
            <div className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase text-text-3">
              Address
            </div>
            <address className="text-[15px] leading-relaxed font-medium not-italic">
              {propertyConfig.address.line1}
              <br />
              {propertyConfig.address.line2}
              <br />
              {propertyConfig.address.line3}
            </address>
            <PremiumButton
              className="mt-4 w-full"
              onClick={() => window.open(propertyConfig.googleMapsUrl, "_blank", "noopener,noreferrer")}
            >
              <MapPinIcon />
              Open in Google Maps
            </PremiumButton>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card gradient className="mb-3.5 p-5">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent-soft text-accent">
              <KeyIcon />
            </div>
            <div>
              <div className="text-[15px] font-semibold">Front door PIN</div>
              <div className="text-[12.5px] font-medium text-text-2">Keyless smart lock</div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            {pinDigits.map((digit, i) => (
              <div
                key={i}
                className="flex aspect-[1/1.18] flex-1 items-center justify-center rounded-[14px] border border-line bg-bg-2 text-[26px] font-semibold"
              >
                {digit}
              </div>
            ))}
          </div>
          {!pinRevealed && (
            <PremiumButton
              variant="secondary"
              className="mt-3.5 w-full"
              onClick={() => setPinRevealed(true)}
            >
              Tap to reveal PIN
            </PremiumButton>
          )}
        </Card>
      </Reveal>

      <Reveal>
        <div className="mb-3.5 flex gap-[11px]">
          <Card className="flex-1 p-4 shadow-premium">
            <div className="text-xs font-medium text-text-3">Check-in from</div>
            <div className="mt-1.5 text-2xl font-semibold tracking-tight">
              2:00<span className="ml-0.5 text-[13px] text-text-2">PM</span>
            </div>
          </Card>
          <Card className="flex-1 p-4 shadow-premium">
            <div className="text-xs font-medium text-text-3">Checkout by</div>
            <div className="mt-1.5 text-2xl font-semibold tracking-tight">
              12:00<span className="ml-0.5 text-[13px] text-text-2">PM</span>
            </div>
          </Card>
        </div>
      </Reveal>

      <Reveal>
        <Card className="mb-[22px] bg-card-2 p-[18px]">
          <div className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
            <ShieldIcon />
            At the security gate
          </div>
          <p className="m-0 text-[13.5px] leading-relaxed font-medium text-text-2">
            {propertyConfig.securityNote}
          </p>
        </Card>
      </Reveal>

      <Reveal>
        <h3 className="mx-0.5 mb-3.5 font-serif text-[21px] tracking-tight">
          Nearby, curated
        </h3>
      </Reveal>
      <div className="flex flex-col gap-2">
        {propertyConfig.nearby.map((place, i) => (
          <Reveal key={place.name} delay={i * 0.04}>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-card p-[14px_16px]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-accent-soft text-[11px] font-semibold text-accent">
                {place.tag}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{place.name}</div>
                <div className="text-xs font-medium text-text-2">{place.kind}</div>
              </div>
              <div className="text-[12.5px] font-semibold text-text-3">{place.dist}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-5.2-7-10.5A7 7 0 0 1 19 10.5C19 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2 19 4M16 7l2.5 2.5M13.5 9.5 16 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6Z" />
    </svg>
  );
}
