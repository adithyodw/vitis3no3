"use client";

import { Card } from "@/components/ui/primitives";
import { propertyConfig } from "@/config/property";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HouseManualSection() {
  const [openId, setOpenId] = useState<string | null>("smart-home");

  return (
    <div className="flex flex-col gap-2.5">
      <div className="mb-1">
        <h3 className="text-lg font-semibold tracking-tight">House manual</h3>
        <p className="mt-1 text-[13px] text-text-2">
          If you need assistance, contact your host via Airbnb messaging.
        </p>
      </div>

      {propertyConfig.houseManual.map((item) => {
        const isOpen = openId === item.id;
        return (
          <Card key={item.id} className="overflow-hidden p-0">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent px-4 py-3.5 text-left active:bg-card-2"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold">{item.title}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-text-3">
                <ChevronDown />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.ol
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden px-4 pb-4"
                >
                  {item.steps.map((step, i) => (
                    <li
                      key={i}
                      className="ml-4 list-decimal text-[13.5px] leading-relaxed font-medium text-text-2"
                    >
                      {step}
                    </li>
                  ))}
                </motion.ol>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
}

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
