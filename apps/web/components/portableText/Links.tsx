import React from "react";
import Link from "next/link";
import tw, { styled, css } from "twin.macro";
import { pathResolver } from "@utils/pathResolver";

const StyledLink = styled.a({
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word",
  ...tw`hover:(bg-blue-200)`,
});
type ReferenceType = "post" | "route" | "legal" | "page";

type BaseLink = {
  children: React.ReactNode;
  mark: {
    title?: string;
  };
};
type InternalProps = BaseLink & {
  mark: {
    slug: string;
    type: ReferenceType;
  };
};
type ExternalProps = BaseLink & {
  mark: {
    href: string;
  };
};
export function internalLinkHandler({ children, mark }: InternalProps) {
  const href = pathResolver(mark);
  return (
    <Link href={href}>
      <StyledLink>{mark?.title ?? children}</StyledLink>
    </Link>
  );
}

export function externalLinkHandler({
  children,
  mark: { href, title },
}: ExternalProps) {
  return <StyledLink href={href}>{title ?? children}</StyledLink>;
}
