import { redirect } from "next/navigation";
import { siteConfig } from "@/config/property";

export default function HomePage() {
  redirect(`/checkin/${siteConfig.demoToken}`);
}
