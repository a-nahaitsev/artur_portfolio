import { Bounded } from "@/components/LuxuryPage/Bounded";
import ButtonLink from "@/components/LuxuryPage/ButtonLink";
import FadeIn from "@/components/LuxuryPage/FadeIn";
import RevealText from "@/components/LuxuryPage/RevealText";
import { AsElementType } from "@/components/LuxuryPage/types";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { FC } from "react";

gsap.registerPlugin(useGSAP);

/**
 * Props for `LuxuryHero`.
 */
export type LuxuryHeroProps = SliceComponentProps<Content.LuxuryHeroSlice>;

/**
 * Component for "LuxuryHero" Slices.
 */
const LuxuryHero: FC<LuxuryHeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen relative overflow-hidden bg-neutral-950"
    >
      <FadeIn
        className="absolute inset-0 motion-safe:scale-125 opacity-0"
        vars={{ scale: 1, opacity: 0.5 }}
      >
        <PrismicNextImage
          field={slice.primary.image}
          priority
          fill
          className="object-cover motion-reduce:opacity-50"
        />
      </FadeIn>
      <div className="flex relative h-screen flex-col justify-center">
        <RevealText
          id="hero-heading"
          field={slice.primary.heading}
          className="font-display max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl"
          staggerAmount={0.2}
          duration={1.7}
          as={AsElementType.H1}
        />
        <FadeIn
          className="mt-6 max-w-md text-lg text-neutral-100 translate-y-8"
          vars={{ delay: 1, duration: 1.3 }}
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>
        <FadeIn
          className="mt-8 translate-y-5"
          vars={{ delay: 1.7, duration: 1.1 }}
        >
          {slice.primary.button.map((link) => (
            <ButtonLink key={link.key} field={link} variant="Secondary" className="w-fit" />
          ))}
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default LuxuryHero;
