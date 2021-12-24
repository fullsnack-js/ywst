import { pathResolver } from "@utils/pathResolver";
import NextLink from "next/link";
import tw, { styled } from "twin.macro";
import { NavigationItem } from "types/sanity.objects";
import { useRouter } from "next/router";
export type ItemProps = NavigationItem["navLink"];
// const LinkText = ({
//   children,
//   href,
// }: {
//   children: React.ReactNode;
//   href?: string;
// }) => (
//   <a tw="" href={href}>
//     <p tw="text-2xl mb-2 font-extrabold">{children}</p>
//   </a>
// );

type LinkProps = { isActive?: boolean };
const LinkText = styled.a(({ isActive }: LinkProps) => [
  tw`block hocus:(text-yellow-400) text-2xl mb-2 font-extrabold`,
  isActive && tw`underline`,
]);
function ActiveLink({
  children,
  hide,
  href,
}: {
  children: React.ReactNode;
  href: string;
  hide?: boolean;
}) {
  const router = useRouter();
  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   router.push(href).then();
  // };
  return (
    <LinkText
      href={href}
      isActive={router.asPath === href}
      onClick={() => hide}>
      {children}
    </LinkText>
  );
}
export const FullNavItem = ({
  link,
  linkType,
  hide,
}: ItemProps & { hide?: boolean }) => {
  if (linkType === "external") {
    return (
      <LinkText key={link.title} href={link.href}>
        {link.title}
      </LinkText>
    );
  } else {
    const href = pathResolver(link.route);
    return (
      <NextLink key={link.title} href={href} passHref>
        <ActiveLink hide={hide} href={href}>
          {link.title}
        </ActiveLink>
      </NextLink>
    );
  }
};
