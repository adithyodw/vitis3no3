import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export function formatStayDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

export function countNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const ms = end.getTime() - start.getTime();
  return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)));
}

export function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || "Guest";
}

export function isArrivingToday(checkIn: string): boolean {
  const today = new Date();
  const arrival = new Date(checkIn);
  return (
    today.getFullYear() === arrival.getFullYear() &&
    today.getMonth() === arrival.getMonth() &&
    today.getDate() === arrival.getDate()
  );
}

export function buildWifiQrPayload(ssid: string, password: string): string {
  const escapedSsid = ssid.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
  const escapedPass = password.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
  return `WIFI:T:WPA;S:${escapedSsid};P:${escapedPass};;`;
}
