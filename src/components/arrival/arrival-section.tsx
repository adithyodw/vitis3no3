"use client";

import { PinDisplay } from "@/components/check-in/pin-display";
import { ReservationCard } from "@/components/check-in/reservation-card";
import { PropertyFeaturesCard } from "@/components/home/home-sections";
import { LocationSection } from "@/components/property/location-section";
import { PropertyTypeSection } from "@/components/property/property-type-section";
import { Card, PremiumButton, SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { propertyConfig } from "@/config/property";
import type { Booking } from "@/types";

interface ArrivalSectionProps {
  booking: Booking;
}

export function ArrivalSection({ booking }: ArrivalSectionProps) {
  return (
    <div className="px-[18px] pt-[84px] pb-10">
      <SectionLabel>{propertyConfig.directionsIntro}</SectionLabel>
      <SectionTitle>
        Arrival &<br />
        directions
      </SectionTitle>

      <Reveal>
        <PropertyFeaturesCard />
      </Reveal>

      <Reveal className="mt-3.5">
        <PropertyTypeSection />
      </Reveal>

      <Reveal className="mt-3.5">
        <LocationSection />
      </Reveal>

      <Reveal className="mt-3.5">
        <Card className="p-5">
          <div className="text-base font-semibold">Directions</div>
          <address className="mt-3 text-[15px] leading-relaxed font-medium not-italic text-text-2">
            {propertyConfig.address.line1}
            <br />
            {propertyConfig.address.line2}
            <br />
            {propertyConfig.address.line3}
            <br />
            {propertyConfig.address.line4}
          </address>
          <PremiumButton
            className="mt-4 w-full"
            onClick={() =>
              window.open(propertyConfig.googleMapsUrl, "_blank", "noopener,noreferrer")
            }
          >
            Open in Google Maps
          </PremiumButton>
        </Card>
      </Reveal>

      <Reveal className="mt-3.5">
        <Card className="bg-card-2 p-[18px]">
          <div className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
            <ShieldIcon />
            At the security gate
          </div>
          <p className="m-0 text-[13.5px] leading-relaxed font-medium text-text-2">
            {propertyConfig.securityNote}
          </p>
        </Card>
      </Reveal>

      <Reveal className="mt-3.5">
        <Card gradient className="p-5">
          <div className="mb-4 text-[15px] font-semibold">Door access</div>
          <p className="mb-4 text-[13.5px] leading-relaxed font-medium text-text-2">
            Your check-in PIN:{" "}
            <strong className="text-text">
              {booking.pinCode}
              {propertyConfig.pinSuffix}
            </strong>
          </p>
          <PinDisplay pinCode={booking.pinCode} compact />
        </Card>
      </Reveal>

      <Reveal className="mt-3.5">
        <Card className="p-5">
          <div className="mb-2 text-[15px] font-semibold">Check-in method</div>
          <p className="m-0 text-[13.5px] leading-relaxed font-medium text-text-2">
            {propertyConfig.checkInMethod}
          </p>
        </Card>
      </Reveal>

      <Reveal className="mt-3.5">
        <ReservationCard booking={booking} />
      </Reveal>

      <Reveal className="mt-6">
        <h3 className="mx-0.5 mb-3.5 font-serif text-[21px] tracking-tight">Nearby</h3>
      </Reveal>
      <div className="flex flex-col gap-2">
        {propertyConfig.nearby.map((place, i) => (
          <Reveal key={place.name} delay={i * 0.04}>
            <div className="rounded-2xl border border-line bg-card p-[14px_16px] shadow-premium">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-accent-soft text-[11px] font-semibold text-accent">
                  {place.tag}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{place.name}</div>
                  <div className="mt-0.5 text-xs leading-relaxed font-medium text-text-2">
                    {place.kind}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {place.mapsUrl ? (
                      <a
                        href={place.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-accent underline underline-offset-2"
                      >
                        Google Maps
                      </a>
                    ) : null}
                    {place.instagramUrl ? (
                      <a
                        href={place.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-accent underline underline-offset-2"
                      >
                        Instagram
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6Z" />
    </svg>
  );
}
