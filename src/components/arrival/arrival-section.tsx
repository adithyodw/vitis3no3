"use client";

import { PropertyFeaturesCard } from "@/components/home/home-sections";
import { LocationSection } from "@/components/property/location-section";
import { PropertyTypeSection } from "@/components/property/property-type-section";
import { Card, SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { propertyConfig } from "@/config/property";
import type { NearbyPlace } from "@/types";

export function ArrivalSection() {
  return (
    <div className="px-[18px] pt-6 pb-10">
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
        <Card className="p-5">
          <div className="mb-2 text-[15px] font-semibold">Check-in method</div>
          <p className="m-0 text-[13.5px] leading-relaxed font-medium text-text-2">
            {propertyConfig.checkInMethod}
          </p>
        </Card>
      </Reveal>

      <Reveal className="mt-6">
        <h3 className="mx-0.5 mb-1 font-serif text-[21px] tracking-tight">Nearby</h3>
        <p className="mx-0.5 mb-3.5 text-[13px] font-medium text-text-2">
          Essentials close to the property
        </p>
      </Reveal>
      <NearbyList places={propertyConfig.nearbyEssentials} />

      <Reveal className="mt-6">
        <h3 className="mx-0.5 mb-1 font-serif text-[21px] tracking-tight">
          Top destinations in Batam
        </h3>
        <p className="mx-0.5 mb-3.5 text-[13px] font-medium text-text-2">
          Popular spots worth exploring during your stay
        </p>
      </Reveal>
      <NearbyList places={propertyConfig.batamDestinations} />
    </div>
  );
}

function NearbyList({ places }: { places: NearbyPlace[] }) {
  return (
    <div className="flex flex-col gap-2">
      {places.map((place, i) => (
        <Reveal key={place.name} delay={i * 0.03}>
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
                      Open in Maps
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
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6Z" />
    </svg>
  );
}
