"use client";

import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  className?: string;
}

const FadeIn = ({ children, vars = {}, className }: FadeInProps) => {
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
