"use client";

import { Card } from "@/components/ui/primitives";
import { propertyConfig } from "@/config/property";
import type { HouseRulesConfig } from "@/types";

interface HouseRulesSectionProps {
  config?: HouseRulesConfig;
}

export function HouseRulesSection({
  config = propertyConfig.houseRulesConfig,
}: HouseRulesSectionProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-line px-5 py-5">
        <h3 className="text-xl font-semibold tracking-tight">House rules</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-2">{config.intro}</p>
      </div>

      <RuleToggleRow
        label="Pets allowed"
        note={config.petsNote}
        allowed={config.petsAllowed}
      />
      <CounterRow label="Maximum number of pets allowed" value={config.maxPets} />
      <RuleToggleRow label="Events allowed" allowed={config.eventsAllowed} />
      <RuleToggleRow
        label="Smoking, vaping, e-cigarettes allowed"
        allowed={config.smokingAllowed}
      />

      {config.quietHoursEnabled && (
        <div className="border-b border-line px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[15px] font-medium">Quiet hours</span>
            <ToggleBadge allowed />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <TimeBox label="Start" value={config.quietHoursStart} />
            <TimeBox label="End" value={config.quietHoursEnd} />
          </div>
        </div>
      )}

      <RuleToggleRow
        label="Commercial photography and filming allowed"
        allowed={config.commercialPhotographyAllowed}
      />
      <CounterRow label="Number of guests" value={config.maxGuests} />

      <div className="border-b border-line px-5 py-4">
        <div className="text-[15px] font-medium">Check-in and checkout times</div>
        <div className="mt-1 text-sm text-text-2">{config.checkInSummary}</div>
        <div className="text-sm text-text-2">{config.checkOutSummary}</div>
        <p className="mt-3 text-[13px] leading-relaxed text-text-2">
          {propertyConfig.checkOutNote}
        </p>
      </div>

      <div className="px-5 py-4">
        <div className="text-[15px] font-medium">Additional rules</div>
        <p className="mt-2 text-sm leading-relaxed text-text-2 whitespace-pre-wrap">
          {config.additionalRules}
        </p>
      </div>
    </Card>
  );
}

function RuleToggleRow({
  label,
  note,
  allowed,
}: {
  label: string;
  note?: string;
  allowed: boolean;
}) {
  return (
    <div className="border-b border-line px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-medium">{label}</div>
          {note ? (
            <p className="mt-1 text-[13px] leading-relaxed text-text-2">{note}</p>
          ) : null}
        </div>
        <ToggleBadge allowed={allowed} />
      </div>
    </div>
  );
}

function CounterRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
      <span className="text-[15px] font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-text-3">
          −
        </span>
        <span className="min-w-[1.5rem] text-center text-[15px] font-semibold">{value}</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-text-3">
          +
        </span>
      </div>
    </div>
  );
}

function ToggleBadge({ allowed }: { allowed: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
          allowed
            ? "border-line bg-transparent text-text-3"
            : "border-text bg-text text-white"
        }`}
        aria-hidden
      >
        ✕
      </span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
          allowed
            ? "border-text bg-text text-white"
            : "border-line bg-transparent text-text-3"
        }`}
        aria-hidden
      >
        ✓
      </span>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line px-3 py-2.5">
      <div className="text-[11px] font-medium text-text-3">{label}</div>
      <div className="mt-0.5 text-sm font-semibold">{value}</div>
    </div>
  );
}
