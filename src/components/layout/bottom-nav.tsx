"use client";

import type { TabId } from "@/types";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: (active: boolean) => React.ReactNode }[] = [
  { id: "home", label: "Stay", icon: (active) => <HomeIcon active={active} /> },
  { id: "arrival", label: "Arrival", icon: (active) => <ArrivalIcon active={active} /> },
  { id: "smart", label: "Smart", icon: (active) => <SmartIcon active={active} /> },
  { id: "guide", label: "Guide", icon: (active) => <GuideIcon active={active} /> },
  { id: "help", label: "Help", icon: (active) => <HelpIcon active={active} /> },
];

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  return (
    <nav
      className="relative z-30 flex items-stretch gap-0 border-t border-line glass-bar px-2 pt-2 pb-[calc(9px+env(safe-area-inset-bottom))]"
      aria-label="Main navigation"
    >
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-1 cursor-pointer flex-col items-center gap-1 border-none bg-transparent px-0.5 py-1.5 transition-transform active:scale-90",
              active ? "text-accent" : "text-text-3",
            )}
          >
            {tab.icon(active)}
            <span className="text-[10.5px] font-semibold">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5a.5.5 0 0 0 .5.5H10v-5h4v5h3.5a.5.5 0 0 0 .5-.5V10" />
    </svg>
  );
}

function ArrivalIcon({ active }: { active: boolean }) {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-5.2-7-10.5A7 7 0 0 1 19 10.5C19 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </svg>
  );
}

function SmartIcon({ active }: { active: boolean }) {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <rect x="9" y="9" width="6" height="6" rx="1.4" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  );
}

function GuideIcon({ active }: { active: boolean }) {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 1 5 19.5Z" />
      <path d="M5 17.5A1.5 1.5 0 0 1 6.5 16H19" />
    </svg>
  );
}

function HelpIcon({ active }: { active: boolean }) {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.3a2.8 2.8 0 0 1 5.4 1c0 1.8-2.6 2.2-2.6 4M12 17h.01" />
    </svg>
  );
}
