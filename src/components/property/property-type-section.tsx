"use client";

import { Card } from "@/components/ui/primitives";
import { propertyConfig } from "@/config/property";

export function PropertyTypeSection() {
  const pt = propertyConfig.propertyType;

  return (
    <Card className="p-5">
      <h3 className="text-xl font-semibold tracking-tight">Property type</h3>
      <p className="mt-1.5 text-[13px] font-medium text-text-2">
        A quick overview of the home
      </p>

      <div className="mt-5 flex flex-col gap-4">
        <InfoRow label="Category" value={pt.category} />
        <InfoRow label="Property type" value={pt.type} note={pt.typeNote} />
        <InfoRow label="Listing type" value={pt.listingType} note={pt.listingTypeNote} />
        <div className="grid grid-cols-2 gap-3">
          <InfoRow label="Indoor space" value={`${pt.sizeSqm} ${pt.sizeUnit.toLowerCase()}`} compact />
          <InfoRow label="Entire place" value="Yes" compact />
        </div>
        <p className="text-[13px] leading-relaxed text-text-2">{pt.sizeNote}</p>
      </div>
    </Card>
  );
}

function InfoRow({
  label,
  value,
  note,
  compact,
}: {
  label: string;
  value: string;
  note?: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "border-b border-line/70 pb-4 last:border-0 last:pb-0"}>
      <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-text-3">
        {label}
      </div>
      <div className={`font-semibold tracking-tight text-text ${compact ? "mt-1 text-[15px]" : "mt-1.5 text-[17px]"}`}>
        {value}
      </div>
      {note ? (
        <p className="mt-2 text-[13px] leading-relaxed text-text-2">{note}</p>
      ) : null}
    </div>
  );
}
