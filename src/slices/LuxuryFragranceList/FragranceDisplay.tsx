import ButtonLink from "@/components/LuxuryPage/ButtonLink";
import FadeIn from "@/components/LuxuryPage/FadeIn";
import FragranceAttributes from "@/components/LuxuryPage/FragranceAttributes";
import { Content } from "@prismicio/client";
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import React from "react";
import { HiPlus } from "react-icons/hi2";

type FragranceDisplayProps = {
  image: ImageField;
  url?: string;
  title: Content.LuxuryFragranceDocumentData["title"];
  description: Content.LuxuryFragranceDocumentData["description"];
  scentProfile: Content.LuxuryFragranceDocumentData["scent_profile"];
  mood: Content.LuxuryFragranceDocumentData["mood"];
};

const FragranceDisplay = async ({
  image,
  url,
  title,
  description,
  scentProfile,
  mood,
}: FragranceDisplayProps) => {
  return (
    <FadeIn
      className="relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 2.5 }}
      start="top 50%"
    >
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          fill
          field={image}
          className="object-cover opacity-40 md:opacity-100"
          width={1150}
          quality={90}
          alt=""
        />
      </div>

      <FadeIn
        className="relative z-10 grid translate-y-8"
        vars={{ duration: 3, delay: 0.8 }}
        start="top 50%"
      >
        <h3 className="mb-3 font-display text-5xl md:text-6xl lg:text-7xl">
          <PrismicText field={title} />
        </h3>
        <p className="mb-8 text-base font-semibold text-gray-300">
          Eau de Parfum
        </p>
        <div className="mb-10 max-w-md text-lg text-gray-300">
          <PrismicRichText field={description} />
        </div>
        <FragranceAttributes
          scentProfile={scentProfile}
          mood={mood}
          className="mb-10"
        />
        <div className="flex flex-wrap gap-4">
          <ButtonLink href={url ?? ""} variant="Secondary">
            Discover
          </ButtonLink>
          <ButtonLink href="#" variant="Primary">
            <HiPlus className="mr-2" />
            <span>Add to Bag</span>
          </ButtonLink>
        </div>
      </FadeIn>
    </FadeIn>
  );
};

export default FragranceDisplay;
