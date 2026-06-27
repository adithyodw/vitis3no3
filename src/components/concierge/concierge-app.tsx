"use client";

import { ArrivalSection } from "@/components/arrival/arrival-section";
import { GuideSection } from "@/components/guide/guide-section";
import { HelpSection } from "@/components/help/help-section";
import { Hero } from "@/components/hero/hero-section";
import { HomeNavigation } from "@/components/home/home-sections";
import { BottomNav } from "@/components/layout/bottom-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SmartHomeSection } from "@/components/smart-home/smart-home-section";
import { FloatingSupport } from "@/components/support/floating-support";
import { propertyConfig } from "@/config/property";
import type { Booking, TabId } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

interface ConciergeAppProps {
  booking: Booking;
}

export function ConciergeApp({ booking }: ConciergeAppProps) {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((tab: TabId) => {
    setActiveTab(tab);
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const handleHomeNavigate = useCallback(
    (target: "wifi" | "maps" | "smart" | "help") => {
      if (target === "wifi") navigate("guide");
      else if (target === "maps") {
        window.open(propertyConfig.googleMapsUrl, "_blank", "noopener,noreferrer");
      } else if (target === "smart") navigate("smart");
      else navigate("help");
    },
    [navigate],
  );

  const showTopBar = activeTab !== "home";

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-bg-2 font-sans text-text">
      <div className="relative flex h-dvh w-full max-w-[468px] flex-col overflow-hidden bg-bg shadow-premium-lg">
        {showTopBar ? (
          <header className="z-40 flex shrink-0 items-center justify-between gap-2.5 border-b border-line/60 bg-bg/92 px-4 pt-[calc(14px+env(safe-area-inset-top))] pb-3.5 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-accent text-[13px] font-semibold tracking-wide text-white">
                OP
              </div>
              <span className="text-sm font-semibold tracking-tight">
                {propertyConfig.shortName}
              </span>
            </div>
            <ThemeToggle />
          </header>
        ) : (
          <div className="pointer-events-none absolute top-0 right-0 z-40 px-4 pt-[calc(14px+env(safe-area-inset-top))]">
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        )}

        <main
          ref={scrollRef}
          className="scrollbar-hide flex-1 overflow-x-hidden overflow-y-auto overscroll-contain"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {activeTab === "home" && (
                <>
                  <Hero booking={booking} onNavigate={handleHomeNavigate} />
                  <div className="px-[18px] pb-6">
                    <HomeNavigation onNavigate={navigate} />
                  </div>
                </>
              )}
              {activeTab === "arrival" && <ArrivalSection />}
              {activeTab === "smart" && <SmartHomeSection />}
              {activeTab === "guide" && <GuideSection booking={booking} />}
              {activeTab === "help" && <HelpSection />}
            </motion.div>
          </AnimatePresence>
        </main>

        <BottomNav activeTab={activeTab} onChange={navigate} />
        <FloatingSupport onNavigate={navigate} />
      </div>
    </div>
  );
}
