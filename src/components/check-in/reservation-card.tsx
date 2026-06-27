"use client";

import { propertyConfig } from "@/config/property";
import type { Booking } from "@/types";
import { countNights, formatStayDate } from "@/lib/utils";

interface ReservationCardProps {
  booking: Booking;
  className?: string;
}

export function ReservationCard({ booking, className }: ReservationCardProps) {
  const nights = countNights(booking.checkIn, booking.checkOut);

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-line bg-card shadow-premium ${className ?? ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
      <div className="p-5 pt-6">
        <div className="mb-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-text-3">
          {propertyConfig.title}
        </div>
        <div className="mb-[18px] flex items-center justify-between gap-3">
          <div className="text-xs font-semibold tracking-[0.16em] uppercase text-text-3">
            Your reservation
          </div>
          {booking.bookingRef ? (
            <div className="text-xs font-medium text-text-3">#{booking.bookingRef}</div>
          ) : null}
        </div>

        <div className="flex items-stretch gap-2">
          <div className="flex-1 rounded-2xl bg-bg-2/80 p-3">
            <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-text-3">
              Check-in
            </div>
            <div className="text-[17px] font-semibold tracking-tight">
              {formatStayDate(booking.checkIn)}
            </div>
            <div className="mt-0.5 text-[13px] font-medium text-text-2">
              {propertyConfig.checkInTime}
            </div>
            <div className="mt-0.5 text-[12px] font-medium text-accent">
              until {propertyConfig.checkInEnd}
            </div>
          </div>

          <div className="flex items-center px-0.5 text-text-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M5 12h13M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex-1 rounded-2xl bg-bg-2/80 p-3 text-right">
            <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-text-3">
              Checkout
            </div>
            <div className="text-[17px] font-semibold tracking-tight">
              {formatStayDate(booking.checkOut)}
            </div>
            <div className="mt-0.5 text-[13px] font-medium text-text-2">
              {propertyConfig.checkOutTime}
            </div>
            <div className="mt-0.5 text-[12px] font-medium text-text-3">Strict</div>
          </div>
        </div>

        <div className="mt-[18px] flex gap-2 border-t border-line-2 pt-4">
          <div className="flex flex-1 items-center gap-2 text-[13px] font-medium text-text-2">
            <NightsIcon />
            {nights} {nights === 1 ? "night" : "nights"}
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 text-[13px] font-medium text-text-2">
            <GuestsIcon />
            {booking.guestCount} guests
          </div>
        </div>
      </div>
    </div>
  );
}

function NightsIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 21s-7-4.5-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 4.5C19 16.5 12 21 12 21Z" strokeLinejoin="round" />
    </svg>
  );
}

function GuestsIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5.5M18.5 19a5.5 5.5 0 0 0-3-4.9" />
    </svg>
  );
}
