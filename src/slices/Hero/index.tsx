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
      className="flex min-h-[calc(100vh-40px)] items-center"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-8">
        <div className="max-w-2xl text-7xl font-bold">
          <PrismicRichText field={title} />
        </div>
        <div className="max-w-2xl">
          <PrismicRichText field={description} />
        </div>
        <PrismicNextLink field={button} />
      </div>
    </section>
  );
};

export default Hero;
