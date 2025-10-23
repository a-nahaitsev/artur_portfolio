"use client";

import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
  className?: string;
}

const FadeIn = ({
  children,
  start = "top 80%",
  vars = {},
  className,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(ref.current, {
          duration: 5,
          opacity: 1,
          ease: "power3.out",
          y: 0,
          ...vars,
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(ref.current, {
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
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
};

export default FadeIn;
