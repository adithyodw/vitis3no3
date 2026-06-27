"use client";

import { propertyConfig } from "@/config/property";

interface PinDisplayProps {
  pinCode: string;
  revealed?: boolean;
  onReveal?: () => void;
  compact?: boolean;
}

export function PinDisplay({
  pinCode,
  revealed = true,
  onReveal,
  compact = false,
}: PinDisplayProps) {
  const digits = revealed ? pinCode.split("") : Array(pinCode.length).fill("•");
  const digitSize = compact
    ? "text-xl min-w-[2rem]"
    : "text-[22px] sm:text-[26px] flex-1 aspect-[1/1.18]";

  return (
    <div>
      <div className={`flex items-center gap-1.5 ${compact ? "flex-wrap" : "justify-between gap-2"}`}>
        {digits.map((digit, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-[14px] border border-line bg-bg-2 font-semibold tracking-normal text-text ${digitSize}`}
          >
            {digit}
          </div>
        ))}
        {revealed && (
          <div
            className={`flex items-center justify-center rounded-[14px] border border-accent/30 bg-accent-soft font-semibold text-accent ${compact ? "min-h-[2.75rem] min-w-[2.75rem] text-xl" : "aspect-[1/1.18] flex-[0.85] text-[22px] sm:text-[26px]"}`}
          >
            {propertyConfig.pinSuffix}
          </div>
        )}
      </div>

      {!revealed && onReveal ? (
        <button
          type="button"
          onClick={onReveal}
          className="mt-3.5 w-full cursor-pointer rounded-[13px] bg-accent py-3.5 text-sm font-semibold text-white active:scale-[0.98]"
        >
          Tap to reveal PIN
        </button>
      ) : (
        <p className="mt-3.5 text-center text-[13px] leading-relaxed font-medium text-text-2">
          {propertyConfig.pinInstruction}
        </p>
      )}
    </div>
  );
}
