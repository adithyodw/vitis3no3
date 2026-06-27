"use client";

import { propertyConfig } from "@/config/property";

interface WelcomeCardProps {
  guestName: string;
  className?: string;
}

function displayName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed || trimmed.toLowerCase() === "guest") return "Guest";
  return trimmed.split(/\s+/)[0] ?? "Guest";
}

export function WelcomeCard({ guestName, className }: WelcomeCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-line bg-card shadow-premium ${className ?? ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
      <div className="p-5 pt-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-text-3">
          {propertyConfig.title}
        </p>
        <h2 className="mt-3 font-serif text-[28px] leading-tight tracking-tight">
          Welcome, {displayName(guestName)}.
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed font-medium text-text-2">
          Your reservation details are in your Airbnb confirmation and guest email.
          Everything you need for your stay is organized below.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <InfoChip label="Check-in from" value={propertyConfig.checkInTime} />
          <InfoChip label="Checkout by" value={propertyConfig.checkOutTime} />
        </div>
      </div>
    </div>
  );
}

function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-bg-2/80 px-3 py-3">
      <div className="text-[10px] font-medium uppercase tracking-wide text-text-3">{label}</div>
      <div className="mt-1 text-[15px] font-semibold tracking-tight">{value}</div>
    </div>
  );
}
