"use client";

import { PinDisplay } from "@/components/check-in/pin-display";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DoorAccessCardProps {
  pinCode: string;
}

export function DoorAccessCard({ pinCode }: DoorAccessCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-[24px] border border-line bg-gradient-to-br from-card to-card-2 p-[22px_20px] shadow-premium">
      <div className="flex items-center gap-2.5">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent-soft text-accent">
          <KeyIcon />
        </div>
        <div>
          <div className="text-[15px] font-semibold tracking-tight">Door access</div>
          <div className="text-[12.5px] font-medium text-text-2">
            {revealed ? "Keypad at main entrance" : "Secured · tap to reveal"}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="hidden"
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            onClick={() => setRevealed(true)}
            className="mt-[18px] flex w-full cursor-pointer flex-col items-center gap-3 rounded-[18px] border border-dashed border-line bg-bg-2/60 px-4 py-8 transition-colors hover:border-accent-2 hover:bg-bg-2 active:scale-[0.99]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-card">
              <KeyIcon />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">Reveal door PIN</span>
            <span className="max-w-[240px] text-center text-[12.5px] leading-relaxed font-medium text-text-2">
              Your private access code is hidden for security
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-[18px]"
          >
            <PinDisplay pinCode={pinCode} revealed />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2 19 4M16 7l2.5 2.5M13.5 9.5 16 12" />
    </svg>
  );
}
