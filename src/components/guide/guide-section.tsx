"use client";

import { Card, SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { Reveal, useCopyFeedback } from "@/components/ui/reveal";
import { CheckoutFarewell } from "@/components/home/home-sections";
import { propertyConfig } from "@/config/property";
import type { Booking } from "@/types";
import { buildWifiQrPayload, copyToClipboard } from "@/lib/utils";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

interface GuideSectionProps {
  booking: Booking;
}

export function GuideSection({ booking }: GuideSectionProps) {
  const { copiedKey, setCopiedKey } = useCopyFeedback();
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);

  const ssid = booking.wifiSsid ?? "";
  const password = booking.wifiPassword ?? "";

  useEffect(() => {
    if (!ssid || !password) return;
    QRCode.toDataURL(buildWifiQrPayload(ssid, password), {
      width: 148,
      margin: 1,
      color: { dark: "#181410", light: "#FFFFFF" },
    }).then(setQrDataUrl);
  }, [ssid, password]);

  const handleCopy = async (text: string, key: string) => {
    const ok = await copyToClipboard(text);
    if (ok) setCopiedKey(key);
  };

  return (
    <div className="px-[18px] pt-[84px] pb-10">
      <SectionLabel>Make yourself at home</SectionLabel>
      <SectionTitle>House guide</SectionTitle>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent-soft text-accent">
              <WifiIcon />
            </div>
            <div className="text-[15px] font-semibold">Wi-Fi</div>
          </div>
          <CopyRow
            label="Network"
            value={ssid}
            copied={copiedKey === "name"}
            onCopy={() => handleCopy(ssid, "name")}
          />
          <CopyRow
            label="Password"
            value={password}
            copied={copiedKey === "pass"}
            onCopy={() => handleCopy(password, "pass")}
            className="mt-2"
          />
          <div className="mt-3.5 flex items-center gap-3.5 border-t border-line-2 pt-3.5">
            {qrDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={qrDataUrl}
                alt="Wi-Fi QR code for one-tap connection"
                width={74}
                height={74}
                className="h-[74px] w-[74px] shrink-0 rounded-[14px] border border-line bg-white"
              />
            ) : (
              <div className="h-[74px] w-[74px] shrink-0 rounded-[14px] bg-bg-2" aria-hidden />
            )}
            <p className="m-0 text-[13px] leading-relaxed font-medium text-text-2">
              Scan the code with your camera to join instantly — no typing.
            </p>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-text-3">
            House rules
          </div>
          <div className="flex flex-col gap-[11px]">
            {propertyConfig.houseRules.map((rule) => (
              <div key={rule} className="flex items-start gap-[11px]">
                <CheckCircle className="mt-px shrink-0 text-accent" />
                <span className="text-sm leading-snug font-medium">{rule}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2.5 rounded-[13px] border border-danger/20 bg-danger/8 p-[13px_15px]">
            <WarningIcon />
            <span className="text-[13.5px] font-medium">
              Smoking penalty — <strong>USD {propertyConfig.smokingPenaltyUsd}</strong>. This is an Airbnb home, not a hotel.
            </span>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-3.5 flex items-center gap-2.5">
            <CameraIcon />
            <div className="text-[15px] font-semibold">Privacy & cameras</div>
          </div>
          {propertyConfig.cctv.map((camera, i) => (
            <div
              key={camera.name}
              className={`flex items-start gap-[11px] py-3 ${i === 0 ? "border-b border-line-2" : "pt-3"}`}
            >
              <span
                className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                  camera.status === "guest-controllable" ? "bg-[#6FD08A]" : "bg-accent"
                }`}
              />
              <div>
                <div className="text-sm font-semibold">{camera.name}</div>
                <div className="mt-0.5 text-[12.5px] leading-relaxed font-medium text-text-2">
                  {camera.description}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-text-3">
            Entertainment
          </div>
          <div className="flex flex-wrap gap-2">
            {propertyConfig.entertainment.map((item) => (
              <span
                key={item}
                className="rounded-full bg-bg-2 px-3 py-1.5 text-[12.5px] font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-text-3">
            Facilities · walking distance
          </div>
          <div className="mb-3.5 grid grid-cols-3 gap-2">
            {propertyConfig.facilities.items.map((item) => (
              <div
                key={item}
                className="flex aspect-square items-center justify-center rounded-[14px] bg-bg-2 p-2 text-center text-[11px] font-semibold text-text-2"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {propertyConfig.facilities.items.map((item) => (
              <span key={item} className="rounded-full bg-bg-2 px-3 py-1.5 text-[12.5px] font-semibold">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-3.5 mb-0 text-[13px] font-medium text-text-2">
            {propertyConfig.facilities.feeNote}
          </p>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-text-3">
            Where you&apos;ll sleep
          </div>
          <div className="flex flex-col gap-3">
            {propertyConfig.beds.map((bed) => (
              <div key={bed.room} className="flex items-center gap-3">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] bg-accent-soft text-accent">
                  <BedIcon />
                </div>
                <div>
                  <div className="text-[14.5px] font-semibold">{bed.room}</div>
                  <div className="text-[12.5px] font-medium text-text-2">{bed.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="mb-3.5 p-5">
          <div className="mb-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-text-3">
            Bathrooms & supplies
          </div>
          <p className="mb-0 text-[13.5px] leading-relaxed font-medium text-text-2">
            <strong className="text-text">Master bathroom</strong> — {propertyConfig.bathrooms.master}
            <br />
            <strong className="text-text">Common bathroom</strong> — {propertyConfig.bathrooms.common}
          </p>
          <div className="mt-3.5 flex gap-2">
            {[
              { value: propertyConfig.guestSupplies.towels, label: "towels" },
              { value: propertyConfig.guestSupplies.toiletries, label: "toiletries" },
              { value: propertyConfig.guestSupplies.maxGuests, label: "guests" },
            ].map((item) => (
              <div key={item.label} className="flex-1 rounded-[14px] bg-bg-2 py-3 text-center">
                <div className="text-lg font-semibold">{item.value}</div>
                <div className="mt-0.5 text-[11px] font-medium text-text-3">{item.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card gradient className="p-5">
          <div className="mb-4 flex items-center gap-2.5">
            <CheckoutIcon />
            <div className="text-[15px] font-semibold">Before you check out</div>
          </div>
          <div>
            {propertyConfig.checkout.map((step, i) => (
              <div
                key={step.n}
                className={`flex items-center gap-3 py-[11px] ${
                  i < propertyConfig.checkout.length - 1 ? "border-b border-line-2" : ""
                }`}
              >
                <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-accent text-xs font-semibold text-accent">
                  {step.n}
                </div>
                <span className="text-sm font-medium">{step.t}</span>
              </div>
            ))}
          </div>
          <CheckoutFarewell guestName={booking.guestName} />
        </Card>
      </Reveal>
    </div>
  );
}

function CopyRow({
  label,
  value,
  copied,
  onCopy,
  className,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className={`flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-[13px] border border-line bg-bg-2 px-[15px] py-[13px] text-left text-text active:scale-[0.99] ${className ?? ""}`}
    >
      <div>
        <div className="text-[11px] font-medium text-text-3">{label}</div>
        <div className="mt-0.5 text-[15px] font-semibold tracking-wide">{value}</div>
      </div>
      <span className="flex items-center gap-1.5 text-xs font-semibold text-accent">
        {copied ? (
          <>
            <CheckIcon /> Copied
          </>
        ) : (
          <>
            <CopyIcon /> Copy
          </>
        )}
      </span>
    </button>
  );
}

function WifiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 8.8a15 15 0 0 1 20 0M5 12a10.5 10.5 0 0 1 14 0M8 15.2a6 6 0 0 1 8 0" />
      <circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.2l2.4 2.4 4.6-4.8" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8.5 16 5l1 3.6L4 12Z" />
      <path d="m15.5 7 3.8-1.3a1 1 0 0 1 1.3.7l.6 2.2a1 1 0 0 1-.7 1.2L17 11" />
      <path d="M5 12v4a2 2 0 0 0 2 2h1M8 21v-3" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 18V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10M3 14h18M7 10h4" />
      <path d="M3 18v2M21 18v2" />
    </svg>
  );
}

function CheckoutIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12.5l5 5 11-11" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}
