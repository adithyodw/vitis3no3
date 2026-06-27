"use client";

import { Card } from "@/components/ui/primitives";
import { propertyConfig } from "@/config/property";

export function PropertyTypeSection() {
  const pt = propertyConfig.propertyType;

  return (
    <Card className="p-5">
      <h3 className="text-xl font-semibold tracking-tight">Property type</h3>

      <div className="mt-4 flex flex-col gap-3">
        <FieldBox label="Which is most like your place?" value={pt.category} />
        <FieldBox label="Property type" value={pt.type} note={pt.typeNote} />
        <FieldBox
          label="Listing type"
          value={pt.listingType}
          note={pt.listingTypeNote}
        />
        <div className="grid grid-cols-2 gap-3">
          <SizeField label="Property size" value={String(pt.sizeSqm)} />
          <FieldBox label="Unit" value={pt.sizeUnit} />
        </div>
        <p className="text-[13px] leading-relaxed text-text-2">{pt.sizeNote}</p>
      </div>
    </Card>
  );
}

function FieldBox({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div>
      <div className="rounded-2xl border border-line px-4 py-3.5">
        <div className="text-[13px] font-medium text-text-2">{label}</div>
        <div className="mt-0.5 flex items-center justify-between gap-2">
          <span className="text-[15px] font-semibold">{value}</span>
          <ChevronDown />
        </div>
      </div>
      {note ? <p className="mt-2 text-[13px] leading-relaxed text-text-2">{note}</p> : null}
    </div>
  );
}

function SizeField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line px-4 py-3.5">
      <div className="text-[13px] font-medium text-text-2">{label}</div>
      <div className="mt-0.5 text-[15px] font-semibold">{value}</div>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
