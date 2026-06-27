"use client";

import { Card, NavRow, PremiumButton } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { propertyConfig, siteConfig } from "@/config/property";
import type { TabId } from "@/types";
import { firstName } from "@/lib/utils";

interface HomeNavProps {
  onNavigate: (tab: TabId) => void;
}

export function HomeNavigation({ onNavigate }: HomeNavProps) {
  return (
    <>
      <Reveal>
        <h2 className="mx-0.5 mt-7 mb-3.5 font-serif text-[23px] tracking-tight">
          Everything you need
        </h2>
      </Reveal>
      <div className="flex flex-col gap-[11px]">
        <Reveal delay={0.05}>
          <NavRow
            title="Arrival & directions"
            subtitle="Address, map, door PIN & check-in"
            onClick={() => onNavigate("arrival")}
            icon={<MapPinIcon />}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <NavRow
            title="Smart home guide"
            subtitle="Google Home, lights, AC & entertainment"
            onClick={() => onNavigate("smart")}
            icon={<SmartIcon />}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <NavRow
            title="House guide"
            subtitle="Wi-Fi, rules, manual & checkout"
            onClick={() => onNavigate("guide")}
            icon={<BookIcon />}
          />
        </Reveal>
      </div>

      <Reveal className="mt-[22px]">
        <div className="flex items-center gap-3.5 rounded-[20px] border border-line bg-card-2 p-4">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white">
            <MessageIcon />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium text-text-3">Your host</div>
            <div className="text-[15px] font-semibold tracking-tight">
              Message on Airbnb
            </div>
            <div className="mt-0.5 text-[12px] font-medium text-text-2">
              Available anytime during your stay
            </div>
          </div>
          <PremiumButton
            variant="secondary"
            className="rounded-full px-4 py-2.5 text-[13px]"
            onClick={() =>
              window.open(siteConfig.host.airbnbMessageUrl, "_blank", "noopener,noreferrer")
            }
          >
            Message
          </PremiumButton>
        </div>
      </Reveal>

      <p className="mt-7 text-center text-xs leading-relaxed font-medium text-text-3">
        {propertyConfig.name}
        <br />
        {propertyConfig.address.line4}
      </p>
    </>
  );
}

export function CheckoutFarewell({ guestName }: { guestName: string }) {
  const label =
    !guestName.trim() || guestName.trim().toLowerCase() === "guest"
      ? "Guest"
      : firstName(guestName);
  return (
    <div className="mt-4 text-center font-serif text-[17px] text-accent italic">
      Safe journey, {label}.
    </div>
  );
}

export function PropertyFeaturesCard() {
  return (
    <Card className="mb-0 p-5">
      <div className="text-base font-semibold tracking-tight">{propertyConfig.title}</div>
      <p className="mt-3 text-[13.5px] leading-relaxed font-medium text-text-2">
        {propertyConfig.description}
      </p>

      <div className="mt-4 text-sm font-semibold">Property layout</div>
      <ul className="mt-2 space-y-1.5 text-[13.5px] leading-relaxed font-medium text-text-2">
        <li>2-bedroom house</li>
        <li>1 loft</li>
        <li>1 King-size bed in the master bedroom with attached bathroom and water heater</li>
        <li>1 Queen-size bed in the common bedroom</li>
        <li>1 Tatami Queen-size bed in the loft</li>
        <li>1 Common bathroom (no water heater)</li>
      </ul>
      <p className="mt-3 text-[13px] font-semibold text-text">{propertyConfig.layoutNote}</p>

      <div className="mt-4 flex gap-2">
        {[
          { value: propertyConfig.sizeSqm, label: "sqm" },
          { value: propertyConfig.bedrooms, label: "bedrooms" },
          { value: propertyConfig.loft, label: "loft" },
        ].map((stat) => (
          <div key={stat.label} className="flex-1 rounded-[14px] bg-bg-2 py-3 text-center">
            <div className="text-[17px] font-semibold">{stat.value}</div>
            <div className="mt-0.5 text-[11px] font-medium text-text-3">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm font-semibold">Property features</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {propertyConfig.features.map((feature) => (
          <span
            key={feature}
            className="rounded-full bg-bg-2 px-3 py-1.5 text-[12.5px] font-semibold"
          >
            {feature}
          </span>
        ))}
      </div>
    </Card>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-5.2-7-10.5A7 7 0 0 1 19 10.5C19 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </svg>
  );
}

function SmartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <rect x="9" y="9" width="6" height="6" rx="1.4" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 1 5 19.5Z" />
      <path d="M5 17.5A1.5 1.5 0 0 1 6.5 16H19" />
      <path d="M9 7.5h6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}
