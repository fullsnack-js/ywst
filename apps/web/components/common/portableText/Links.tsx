import React from "react";
import NextLink from "next/link";
import tw, { styled, css } from "twin.macro";
import { pathResolver } from "@utils/pathResolver";

const StyledAnchor = styled.a({
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
export function internalLinkHandler({
  children,
  mark: { type: _type, ...rest },
}: InternalProps) {
  const resolvedMark = { ...rest, _type };
  const href = pathResolver(resolvedMark);
  return (
    <NextLink href={href} passHref>
      <StyledAnchor>{resolvedMark?.title ?? children}</StyledAnchor>
    </NextLink>
  );
}

export function externalLinkHandler({
  children,
  mark: { href, title },
}: ExternalProps) {
  return <StyledAnchor href={href}>{title ?? children}</StyledAnchor>;
}
