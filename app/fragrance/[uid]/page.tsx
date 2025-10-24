import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { Bounded } from "@/components/LuxuryPage/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import LuxuryLayout from "@/layouts/Luxury";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import FragranceAttributes from "@/components/LuxuryPage/FragranceAttributes";
import { formatPrice } from "@/utils/formatters";
import { HiStar } from "react-icons/hi2";
import OtherFragrances from "@/components/LuxuryPage/OtherFragrances";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("luxury_fragrance", uid)
    .catch(() => notFound());

  return (
    <LuxuryLayout>
      <Bounded className="py-10">
        <div className="grid grid-cols-1 items-center gap-10 pb-1 lg:grid-cols-2">
          <div className="relative mb-14 flex justify-center pb-10">
            <PrismicNextImage
              priority
              field={page.data.bottle_image}
              width={600}
              height={600}
              className="absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
            />
            <PrismicNextImage
              priority
              field={page.data.bottle_image}
              width={600}
              height={600}
              className="relative"
            />
          </div>
          {/* Product info section */}
          <div className="text-white">
            <h1 className="mb-4 border-b border-neutral-700 pb-2 font-display text-4xl md:text-5xl">
              <PrismicText field={page.data.title} fallback="Fragrance" />
            </h1>

            <div className="space-y-6">
              <p className="text-md font-semibold">Eau de Parfum Spray</p>

              <PrismicRichText field={page.data.description} />

              <FragranceAttributes
                scentProfile={page.data.scent_profile}
                mood={page.data.mood}
              />

              <p className="mt-10 text-3xl font-light">
                {formatPrice(page.data.price)}
              </p>

              <button className="w-full bg-white py-3 font-medium text-black uppercase transition duration-200 hover:bg-neutral-200">
                Add to Bag
              </button>

              <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
                <a href="#" className="hover:text-neutral-300">
                  763 total reviews
                </a>

                <div className="flex">
                  {[...Array(4)].map((_, index) => (
                    <HiStar key={index} className="size-5 text-white" />
                  ))}
                  <HiStar className="size-5 text-white/50" />
                </div>

                <span>4.4/5</span>
              </div>
            </div>
          </div>
        </div>
        <OtherFragrances currentFragranceUid={uid} />
      </Bounded>
    </LuxuryLayout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("luxury_fragrance", uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title: asText(page.data.title) + " | " + settings.data.site_title,
    description: `Discover ${asText(page.data.title)}, the newest fragrance from Cote Royale.`,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("luxury_fragrance");

  return pages.map((page) => ({ uid: page.uid }));
}
