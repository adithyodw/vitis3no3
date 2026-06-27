import Link from "next/link";
import { propertyConfig } from "@/config/property";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg-2 px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-3">
          Check-in link
        </p>
        <h1 className="mt-2 font-serif text-4xl tracking-tight">Link not found</h1>
        <p className="mt-4 text-sm leading-relaxed font-medium text-text-2">
          This check-in link may have expired or is incorrect. Please open the link from your
          Airbnb confirmation message or contact your host for {propertyConfig.name}.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-[13px] border border-accent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent-soft"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
