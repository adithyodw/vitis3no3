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
  const [topbarVisible, setTopbarVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((tab: TabId) => {
    setActiveTab(tab);
    setTopbarVisible(false);
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setTopbarVisible(el.scrollTop > 230);
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

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-bg-2 font-sans text-text">
      <div className="relative flex h-dvh w-full max-w-[468px] flex-col overflow-hidden bg-bg shadow-premium-lg">
        <header className="pointer-events-none absolute top-0 right-0 left-0 z-40 flex items-center justify-between gap-2.5 px-4 pt-[calc(14px+env(safe-area-inset-top))] pb-3.5">
          <div
            className="flex items-center gap-2.5 transition-all duration-350"
            style={{
              opacity: topbarVisible || activeTab !== "home" ? 1 : 0,
              transform: topbarVisible || activeTab !== "home" ? "translateY(0)" : "translateY(-6px)",
            }}
          >
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-accent text-[13px] font-semibold tracking-wide text-white">
              OP
            </div>
            <span className="text-sm font-semibold tracking-tight">
              {propertyConfig.shortName}
            </span>
          </div>
          <ThemeToggle />
        </header>

        <main
          ref={scrollRef}
          onScroll={handleScroll}
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
              {activeTab === "arrival" && <ArrivalSection booking={booking} />}
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
