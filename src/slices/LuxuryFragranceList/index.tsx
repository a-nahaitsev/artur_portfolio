import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/LuxuryPage/Bounded";
import RevealText from "@/components/LuxuryPage/RevealText";
import { AsElementType } from "@/components/LuxuryPage/types";
import FragranceDisplay from "./FragranceDisplay";

export type LuxuryFragranceListProps =
  SliceComponentProps<Content.LuxuryFragranceListSlice>;

const LuxuryFragranceList: FC<LuxuryFragranceListProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-8 bg-black py-16 text-center text-white md:py-24"
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase">
          {slice.primary.eyebrow}
        </p>
        <RevealText
          id={`fragrance-list-heading-${slice.id}`}
          field={slice.primary.heading}
          as={AsElementType.H2}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        />
        <div className="mx-auto max-w-2xl text-lg text-balance text-gray-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12">
          {slice.primary.fragrances.map((item) => {
            if (!isFilled.contentRelationship(item.fragrance)) return null;
            if (!item.fragrance.data) return null;

            return (
              <FragranceDisplay
                key={item.fragrance.id}
                url={item.fragrance.url}
                image={item.fragrance.data.feature_image}
                title={item.fragrance.data.title}
                description={item.fragrance.data.description}
                scentProfile={item.fragrance.data.scent_profile}
                mood={item.fragrance.data.mood}
              />
            );
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default LuxuryFragranceList;
