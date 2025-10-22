import { AsElementType } from "./types";
import { cn } from "@/utils/cn";
import { ReactNode, Ref, forwardRef } from "react";

type BoundedProps = {
  as?: AsElementType;
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLElement>;
};

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  (
    { as: Comp = AsElementType.Section, className, children, ...restProps },
    ref,
  ) => {
    return (
      <Comp
        ref={ref as any}
        className={cn("px-6 [.header+&]:pt-44 [.header+&]:md:pt-32", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
