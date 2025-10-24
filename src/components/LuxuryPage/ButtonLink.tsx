import { cn } from "@/utils/cn";
import React from "react";
import TransitionLink, { TransitionLinkProps } from "./TransitionLink";

export type ButtonLinkProps = TransitionLinkProps & {
  variant?: "Primary" | "Secondary";
};

const ButtonLink = ({
  className,
  variant = "Primary",
  ...restProps
}: ButtonLinkProps) => {
  return (
    <TransitionLink
      className={cn(
        "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
        variant === "Secondary"
          ? "border border-white text-white hover:bg-white/20"
          : "bg-white text-black hover:bg-white/80",
        className,
      )}
      {...restProps}
    />
  );
};

export default ButtonLink;
