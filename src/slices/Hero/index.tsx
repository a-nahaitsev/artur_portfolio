import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const { title, description, button } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[calc(100vh-40px)] flex items-center"
    >
      <div className="px-8 max-w-screen-2xl mx-auto flex flex-col gap-4 w-full">
        <h1 className="text-7xl font-bold max-w-2xl">
          <PrismicRichText field={title} />
        </h1>
        <p className="max-w-2xl">
          <PrismicRichText field={description} />
        </p>
        <PrismicNextLink field={button} />
      </div>
    </section>
  );
};

export default Hero;
