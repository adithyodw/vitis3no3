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

      <RuleRow label="Pets allowed" allowed={config.petsAllowed} note={config.petsNote} />
      <RuleRow label="Maximum pets" value={String(config.maxPets)} />
      <RuleRow label="Events allowed" allowed={config.eventsAllowed} />
      <RuleRow label="Smoking, vaping & e-cigarettes" allowed={config.smokingAllowed} />

      {config.quietHoursEnabled ? (
        <div className="border-b border-line px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[15px] font-medium">Quiet hours</span>
            <StatusBadge allowed />
          </div>
          <div className="mt-3 flex gap-3">
            <TimeChip label="Start" value={config.quietHoursStart} />
            <TimeChip label="End" value={config.quietHoursEnd} />
          </div>
        </div>
      ) : null}

      <RuleRow
        label="Commercial photography & filming"
        allowed={config.commercialPhotographyAllowed}
      />
      <RuleRow label="Maximum guests" value={String(config.maxGuests)} />

      <div className="border-b border-line px-5 py-4">
        <div className="text-[15px] font-medium">Check-in & checkout</div>
        <div className="mt-2 space-y-1 text-sm text-text-2">
          <p>{config.checkInSummary}</p>
          <p>{config.checkOutSummary}</p>
        </div>
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

function RuleRow({
  label,
  allowed,
  value,
  note,
}: {
  label: string;
  allowed?: boolean;
  value?: string;
  note?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-medium">{label}</div>
        {note ? (
          <p className="mt-1 text-[13px] leading-relaxed text-text-2">{note}</p>
        ) : null}
      </div>
      {value !== undefined ? (
        <span className="shrink-0 text-[15px] font-semibold tabular-nums">{value}</span>
      ) : (
        <StatusBadge allowed={allowed ?? false} />
      )}
    </div>
  );
}

function StatusBadge({ allowed }: { allowed: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-[12px] font-semibold tracking-wide ${
        allowed
          ? "bg-accent-soft text-accent"
          : "bg-bg-2 text-text-2"
      }`}
    >
      {allowed ? "Allowed" : "Not allowed"}
    </span>
  );
}

function TimeChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 rounded-xl bg-bg-2 px-3 py-2.5">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-text-3">{label}</div>
      <div className="mt-0.5 text-sm font-semibold">{value}</div>
    </div>
  );
}
