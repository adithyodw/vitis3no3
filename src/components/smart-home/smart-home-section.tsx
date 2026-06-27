"use client";

import { Card, SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { propertyConfig } from "@/config/property";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SmartHomeSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="px-[18px] pt-6 pb-10">
      <SectionLabel>Tech-savvy villa</SectionLabel>
      <SectionTitle>
        Smart home
        <br />
        guide
      </SectionTitle>

      <Reveal>
        <div className="mb-4 rounded-[22px] bg-gradient-to-br from-accent to-accent-2 p-[22px] text-white shadow-premium">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase opacity-90">
            <MicIcon />
            Powered by Google Home
          </div>
          <div className="mt-3.5 font-serif text-2xl leading-snug">
            &quot;Hey&nbsp;Google,
            <br />
            turn off the lights.&quot;
          </div>
          <p className="mt-3 mb-0 text-[13px] leading-relaxed font-medium opacity-92">
            Speak naturally to control everything in the villa. Tap any device below for the exact phrases.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-2.5">
        {propertyConfig.smartDevices.map((device, i) => {
          const isOpen = openId === device.id;
          return (
            <Reveal key={device.id} delay={i * 0.04}>
              <Card className="overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : device.id)}
                  className="flex w-full cursor-pointer items-center gap-3 border-none bg-transparent p-[16px_17px] text-left text-text active:bg-card-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-[9px] font-semibold text-accent">
                    {device.short}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold tracking-tight">{device.name}</div>
                    <div className="mt-px text-[12.5px] font-medium text-text-2">{device.sub}</div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-text-3"
                  >
                    <ChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-[17px] pb-[18px] pt-0.5">
                        <p className="mb-3.5 text-[13.5px] leading-relaxed font-medium text-text-2">
                          {device.desc}
                        </p>
                        <div className="flex items-center gap-2 rounded-[13px] border border-dashed border-line bg-bg-2 px-3.5 py-3">
                          <MicSmall />
                          <span className="font-serif text-[13.5px] italic">{device.phrase}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M12 3v9M8.5 6.5v5M15.5 6.5v5M5 9v3M19 9v3" />
    </svg>
  );
}

function MicSmall() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
