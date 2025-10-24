"use client";

import { AsElementType } from "./types";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import { asText, RichTextField } from "@prismicio/client";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface RevealTextProps {
  field: RichTextField;
  id: string;
  className?: string;
  staggerAmount?: number;
  as?: AsElementType;
  duration?: number;
  align?: "start" | "center" | "end";
  triggerStart?: string;
  triggerEnd?: string;
}

const RevealText = ({
  field,
  id,
  className,
  staggerAmount = 0.1,
  as: Component = AsElementType.Div,
  duration = 0.8,
  align = "start",
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
}: RevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const words = asText(field).split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: staggerAmount,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            end: triggerEnd,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(".reveal-text-word", {
          duration: 0.5,
          opacity: 1,
          ease: "none",
          y: 0,
          stagger: 0,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Component
      ref={ref}
      className={cn(
        "reveal-text text-balance",
        align === "center" && "text-center",
        align === "end" && "text-right",
        align === "start" && "text-left",
        className,
      )}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}-${id}`}
          className="mb-0 inline-block overflow-hidden pb-4"
        >
          <span className="reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
            {index < words.length - 1 && <>&nbsp;</>}
          </span>
        </span>
      ))}
    </Component>
  );
};

export default RevealText;
