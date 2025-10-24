"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyProps extends React.ComponentProps<"div"> {
  rootMargin?: string;
}

const Lazy = ({ rootMargin, children, ...restProps }: LazyProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin]);

  return (
    <div ref={ref} {...restProps}>
      {isInView ? children : null}
    </div>
  );
};

export default Lazy;
