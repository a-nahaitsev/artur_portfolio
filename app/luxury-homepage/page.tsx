import LuxuryLayout from "@/layouts/Luxury";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

const LuxuryHomepage = async () => {
  const client = createClient();
  const page = await client
    .getSingle("luxury_homepage")
    .catch(() => notFound());

  return (
    <LuxuryLayout>
      <SliceZone slices={page.data.slices} components={components} />
    </LuxuryLayout>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getSingle("luxury_homepage")
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export default LuxuryHomepage;
