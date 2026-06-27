import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
}

export function PremiumButton({
  variant = "primary",
  className,
  children,
  ...props
}: PremiumButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[13px] font-semibold transition-transform active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-accent px-4 py-3.5 text-sm text-white hover:bg-accent-2",
        variant === "secondary" &&
          "border border-accent bg-transparent px-4 py-3.5 text-sm text-accent hover:bg-accent-soft",
        variant === "ghost" &&
          "bg-transparent px-3 py-2 text-sm text-text hover:bg-card-2",
        variant === "danger" &&
          "border border-danger/30 bg-danger/10 px-4 py-3.5 text-sm text-danger",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className, gradient }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-line bg-card shadow-premium",
        gradient && "bg-gradient-to-br from-card to-card-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-3">
      {children}
    </p>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "mb-5 font-serif text-[34px] leading-[1.05] font-normal tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

interface NavRowProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export function NavRow({ icon, title, subtitle, onClick }: NavRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-[15px] rounded-[20px] border border-line bg-card p-[17px] text-left text-text shadow-premium transition-transform active:scale-[0.985] hover:border-accent-2"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-accent-soft text-accent">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[15.5px] font-semibold tracking-tight">{title}</div>
        <div className="mt-0.5 text-[13px] font-medium text-text-2">{subtitle}</div>
      </div>
      <ChevronRight className="shrink-0 text-text-3" />
    </button>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
