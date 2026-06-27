"use client";

import { Card, PremiumButton } from "@/components/ui/primitives";
import { propertyConfig } from "@/config/property";

export function LocationSection() {
  const { address } = propertyConfig;
  const mapQuery = encodeURIComponent(address.full);

  return (
    <div className="flex flex-col gap-3.5">
      <Card className="overflow-hidden p-0">
        <h3 className="px-5 pt-5 text-xl font-semibold tracking-tight">Location</h3>
        <div className="relative mt-4 h-[200px] overflow-hidden bg-bg-2">
          <iframe
            title="Verified property location"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-text shadow-premium">
            Verified location
          </div>
        </div>
      </Card>

      <LocationRow
        title="Address"
        description={
          <>
            {address.line1}
            <br />
            {address.line2}
            <br />
            {address.line3}
            <br />
            {address.line4}
          </>
        }
        action={
          <PremiumButton
            className="mt-3 w-full"
            onClick={() =>
              window.open(propertyConfig.googleMapsUrl, "_blank", "noopener,noreferrer")
            }
          >
            Open in Google Maps
          </PremiumButton>
        }
      />

      <LocationRow
        title="Guest access"
        description={propertyConfig.guestAccess.join(" · ")}
      />

      <LocationRow
        title="Security"
        description={propertyConfig.securityDescription}
      />

      {propertyConfig.neighborhoodDescription ? (
        <LocationRow
          title="Neighbourhood description"
          description={propertyConfig.neighborhoodDescription}
        />
      ) : null}

      <LocationRow title="Host interaction" description={propertyConfig.hostInteraction} />
    </div>
  );
}

function LocationRow({
  title,
  description,
  action,
}: {
  title: string;
  description: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <Card className="px-5 py-4">
      <div className="text-[15px] font-semibold">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-text-2">{description}</div>
      {action}
    </Card>
  );
}
