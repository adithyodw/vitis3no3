import Link from "next/link";
import { propertyConfig, siteConfig } from "@/config/property";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg-2 px-6 py-16">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-white">
          OP
        </div>
        <h1 className="font-serif text-4xl tracking-tight">
          {propertyConfig.welcomeTitle}
        </h1>
        <p className="mt-3 text-base font-medium text-text-2">
          {propertyConfig.welcomeSubtitle}
        </p>
        <p className="mt-8 text-sm leading-relaxed text-text-3">
          This concierge opens from your personal check-in link after booking.
          Hosts send a secure URL such as{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-text">
            /checkin/your-token
          </code>
          .
        </p>
        <Link
          href={`/checkin/${siteConfig.demoToken}`}
          className="mt-8 inline-flex rounded-[13px] bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-2"
        >
          Preview demo experience
        </Link>
        <p className="mt-6 text-xs text-text-3">
          <a
            href={propertyConfig.airbnbListingUrl}
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Airbnb
          </a>
        </p>
      </div>
    </main>
  );
}
