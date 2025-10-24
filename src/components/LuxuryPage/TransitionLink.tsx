import { asLink, LinkField, PrismicDocument } from "@prismicio/client";
import { Link } from "next-view-transitions";
import React from "react";

export type TransitionLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
} & (
  | { field: LinkField | null; document?: never; href?: never }
  | { field?: never; document: PrismicDocument | null; href?: never }
  | { field?: never; document?: never; href: string }
);

const TransitionLink = ({
  children,
  href,
  className,
  onClick,
  tabIndex,
  field,
  document: doc,
}: TransitionLinkProps) => {
  const url = href ?? asLink(field ?? doc);
  if (!url) {
    console.warn("TransitionLink: No URL found", { field, doc, href });
    return null;
  }

  return (
    <Link
      href={url}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {field?.text ?? children}
    </Link>
  );
};

export default TransitionLink;
