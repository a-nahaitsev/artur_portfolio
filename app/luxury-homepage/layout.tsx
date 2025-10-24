import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Cote Royale",
    description:
      settings.data.meta_description ||
      "Discover the exquisite luxury of Cote Royale.",
    openGraph: {
      images: isFilled.image(settings.data.fallback_og_image)
        ? [settings.data.fallback_og_image.url]
        : ["/media/luxury/cote-royale-og-image.png"],
    },
  };
}

const LuxuryLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default LuxuryLayout;
