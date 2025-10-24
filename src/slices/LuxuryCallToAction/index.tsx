import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import FadeIn from "@/components/LuxuryPage/FadeIn";
import RevealText from "@/components/LuxuryPage/RevealText";
import ButtonLink from "@/components/LuxuryPage/ButtonLink";
import { Bounded } from "@/components/LuxuryPage/Bounded";
import { AsElementType } from "@/components/LuxuryPage/types";

export type LuxuryCallToActionProps =
  SliceComponentProps<Content.LuxuryCallToActionSlice>;

const LuxuryCallToAction: FC<LuxuryCallToActionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-[url('/media/luxury/background.avif')] bg-cover bg-center py-16 text-gray-50 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <FadeIn
          className="translate-y-2 text-sm font-light tracking-[0.2em] uppercase"
          vars={{ duration: 0.8 }}
        >
          {slice.primary.eyebrow}
        </FadeIn>
        <RevealText
          id="cta-heading"
          field={slice.primary.heading}
          as={AsElementType.H2}
          className="mx-auto max-w-3xl font-display text-5xl sm:text-6xl md:text-7xl"
          align="center"
          duration={0.8}
          staggerAmount={0.1}
        />
        <FadeIn
          className="mx-auto max-w-2xl translate-y-2 text-lg text-balance text-gray-300"
          vars={{ duration: 0.8, delay: 0.4 }}
          start="top 80%"
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>
        <div className="mt-10">
          {slice.primary.button.map((link) => (
            <FadeIn key={link.key}>
              <ButtonLink field={link} variant={link.variant} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default LuxuryCallToAction;
