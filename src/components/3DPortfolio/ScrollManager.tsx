import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ScrollManager = ({
  section,
  onSectionChange,
}: {
  section: number;
  onSectionChange: (section: number) => void;
}) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  // data.fill.classList.add("top-0");
  // data.fill.classList.add("absolute");

  // useEffect(() => {
  //   gsap.to(data.el, {
  //     duration: 1,
  //     scrollTop: section * data.el.clientHeight,
  //     onStart: () => {
  //       isAnimating.current = true;
  //     },
  //     onComplete: () => {
  //       isAnimating.current = false;
  //     },
  //   });
  // }, [section]);

  // useFrame(() => {
  //   if (isAnimating.current) {
  //     lastScroll.current = data.offset;
  //     return;
  //   }

  //   const rawSection = Math.round(data.offset * (data.pages - 1));
  //   const currentSection = Math.max(0, Math.min(rawSection, data.pages - 1));

  //   if (currentSection !== section) {
  //     onSectionChange(currentSection);
  //   }

  //   lastScroll.current = data.offset;
  // });

  return null;
};

export default ScrollManager;
