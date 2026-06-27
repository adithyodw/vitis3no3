"use client";

import { Card, SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { propertyConfig, siteConfig } from "@/config/property";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-[18px] pt-[84px] pb-10">
      <SectionLabel>We&apos;re one tap away</SectionLabel>
      <SectionTitle>
        Help &<br />
        support
      </SectionTitle>

      <Reveal>
        <button
          type="button"
          onClick={() =>
            window.open(siteConfig.host.airbnbMessageUrl, "_blank", "noopener,noreferrer")
          }
          className="mb-3.5 flex w-full cursor-pointer items-center gap-3.5 rounded-[18px] border border-line bg-card p-4 text-left shadow-premium active:scale-[0.985] hover:border-accent-2"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-accent-soft text-accent">
            <MessageIcon />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-semibold">Message host on Airbnb</div>
            <div className="text-[12.5px] font-medium text-text-2">
              {propertyConfig.hostInteraction.split(".")[0]}.
            </div>
          </div>
          <ChevronRight />
        </button>
      </Reveal>

      <Reveal>
        <button
          type="button"
          onClick={() => window.open(`tel:${siteConfig.emergencyPhone}`, "_self")}
          className="mb-6 flex w-full cursor-pointer items-center gap-3.5 rounded-[18px] border border-danger/30 bg-danger/6 p-4 text-left active:scale-[0.985]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-danger/14 text-danger">
            <EmergencyIcon />
          </div>
          <div className="flex-1">
            <div className="text-[15px] font-semibold text-danger">
              Emergency · {siteConfig.emergencyPhone}
            </div>
            <div className="text-[12.5px] font-medium text-text-2">
              Police, fire & ambulance (Indonesia)
            </div>
          </div>
        </button>
      </Reveal>

      <Reveal>
        <h3 className="mx-0.5 mb-3.5 font-serif text-[21px] tracking-tight">
          Frequent questions
        </h3>
      </Reveal>

      <div className="flex flex-col gap-2">
        {propertyConfig.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={faq.q} delay={i * 0.03}>
              <Card className="overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center gap-3 border-none bg-transparent p-[15px_16px] text-left active:bg-card-2"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-sm font-semibold tracking-tight">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-text-3"
                  >
                    <ChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-4 pb-4 text-[13.5px] leading-relaxed font-medium text-text-2"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-7 text-center text-xs leading-relaxed font-medium text-text-3">
        {propertyConfig.name}
        <br />
        Thank you for staying with us.
      </p>
    </div>
  );
}

function MessageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--subtle-foreground)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
