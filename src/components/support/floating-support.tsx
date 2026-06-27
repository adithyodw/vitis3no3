"use client";

import { siteConfig } from "@/config/property";
import type { TabId } from "@/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FloatingSupportProps {
  onNavigate: (tab: TabId) => void;
}

export function FloatingSupport({ onNavigate }: FloatingSupportProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute right-4 bottom-[calc(76px+env(safe-area-inset-bottom))] z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto flex flex-col gap-2 rounded-[18px] border border-line bg-card p-2 shadow-premium-lg"
          >
            <MenuAction label="Chat host" onClick={() => { setOpen(false); onNavigate("help"); }} />
            <MenuAction
              label="WhatsApp"
              onClick={() => {
                setOpen(false);
                window.open(`https://wa.me/${siteConfig.host.whatsapp}`, "_blank", "noopener,noreferrer");
              }}
            />
            <MenuAction
              label="Emergency"
              danger
              onClick={() => {
                setOpen(false);
                window.open(`tel:${siteConfig.emergencyPhone}`, "_self");
              }}
            />
            <MenuAction
              label="Security"
              onClick={() => {
                setOpen(false);
                window.open(`tel:${siteConfig.securityPhone}`, "_self");
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        aria-label={open ? "Close support menu" : "Open support menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-accent text-white shadow-premium-lg transition-transform active:scale-95"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

function MenuAction({
  label,
  onClick,
  danger,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-w-[140px] cursor-pointer rounded-xl px-4 py-2.5 text-left text-sm font-semibold active:scale-[0.98] ${
        danger ? "text-danger hover:bg-danger/10" : "text-text hover:bg-bg-2"
      }`}
    >
      {label}
    </button>
  );
}
