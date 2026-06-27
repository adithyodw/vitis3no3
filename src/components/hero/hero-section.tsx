"use client";

import { DoorAccessCard } from "@/components/check-in/door-access-card";
import { WelcomeCard } from "@/components/check-in/welcome-card";
import { Reveal } from "@/components/ui/reveal";
import type { Booking } from "@/types";
import { firstName } from "@/lib/utils";
import { propertyConfig } from "@/config/property";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  booking: Booking;
  onNavigate: (tab: "wifi" | "maps" | "smart" | "help") => void;
}

function displayGuestName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed || trimmed.toLowerCase() === "guest") return "Guest";
  return firstName(trimmed);
}

export function Hero({ booking, onNavigate }: HeroProps) {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 90]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.19]);
  const veilOpacity = useTransform(scrollY, [0, 700], [1, 1]);
  const guestLabel = displayGuestName(booking.guestName);

  return (
    <>
      <div className="relative h-[72dvh] min-h-[470px] overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute -top-[18%] left-0 h-[136%] w-full will-change-transform"
        >
          <Image
            src="/assets/hero.jpg"
            alt="Orchard Park Vitis 3 No. 3"
            fill
            priority
            sizes="468px"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: veilOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[rgba(10,8,5,0.18)] via-[rgba(10,8,5,0.04)] via-38% to-[rgba(10,8,5,0.86)]"
        />
        <div className="absolute right-0 bottom-0 left-0 px-[22px] pb-10 text-white">
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-white/82">
              {propertyConfig.location}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-[46px] leading-[1.02] font-normal tracking-tight">
              Welcome,
              <br />
              {guestLabel}.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-serif text-[19px] italic text-white/90">
              {propertyConfig.welcomeSubtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-[22px] inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/14 px-[15px] py-2.5 text-[13px] font-semibold backdrop-blur-[14px]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#6FD08A] shadow-[0_0_0_3px_rgba(111,208,138,0.28)]" />
              Your stay · Check-in from {propertyConfig.checkInTime}
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float-cue text-white/85">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </div>

      <div className="relative -mt-[26px] rounded-t-[28px] bg-bg px-[18px] pt-[26px] pb-10">
        <div className="mx-auto mb-[22px] h-1 w-[38px] rounded-full bg-line" />

        <Reveal>
          <WelcomeCard guestName={booking.guestName} />
        </Reveal>

        <Reveal className="mt-3.5">
          <DoorAccessCard pinCode={booking.pinCode} />
        </Reveal>

        <Reveal className="mt-3.5">
          <div className="grid grid-cols-4 gap-2">
            <QuickAction label="Wi-Fi" onClick={() => onNavigate("wifi")} icon={<WifiIcon />} />
            <QuickAction label="Maps" onClick={() => onNavigate("maps")} icon={<MapIcon />} />
            <QuickAction label="Smart" onClick={() => onNavigate("smart")} icon={<SmartIcon />} />
            <QuickAction label="Help" onClick={() => onNavigate("help")} icon={<HelpIcon />} />
          </div>
        </Reveal>
      </div>
    </>
  );
}

function QuickAction({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center gap-2 rounded-[18px] border border-line bg-card px-1.5 py-[15px] text-text transition-transform active:scale-95 hover:border-accent-2"
    >
      {icon}
      <span className="text-[11.5px] font-semibold">{label}</span>
    </button>
  );
}

function WifiIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 8.8a15 15 0 0 1 20 0M5 12a10.5 10.5 0 0 1 14 0M8 15.2a6 6 0 0 1 8 0" />
      <circle cx="12" cy="19" r="1.1" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-5.2-7-10.5A7 7 0 0 1 19 10.5C19 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </svg>
  );
}

function SmartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <rect x="9" y="9" width="6" height="6" rx="1.4" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}
