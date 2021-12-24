import React from "react";
import { MenuIcon, CloseIcon } from "./MenuIcons";
import tw, { styled } from "twin.macro";
interface MenuToggleButtonProps {
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hide?: boolean;
}
interface ButtonProps {
  hide?: boolean;
}
const StyledButton = styled.button(({ hide }: ButtonProps) => [
  tw`fixed right-4 bottom-6 w-16 h-16 leading-10 z-50 lg:transform -translate-y-1/2`,
  hide && tw`hidden`,
]);

export const MobileMenuToggleButton = ({
  open,
  handleClick,
  hide,
}: MenuToggleButtonProps) => {
  const Icon = open ? CloseIcon : MenuIcon;
  return (
    <StyledButton hide={hide} type="button" onClick={handleClick}>
      <span tw="h-8 w-8 bg-indigo-300 rounded-full ring-8 ring-indigo-100 flex items-center justify-center">
        <Icon />
      </span>
      <span tw="sr-only">Toggle menu</span>
    </StyledButton>
  );
};
