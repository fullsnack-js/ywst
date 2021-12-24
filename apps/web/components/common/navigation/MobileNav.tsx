import React, { Fragment, useEffect, useRef, useState } from "react";
import tw, { TwStyle, css, styled } from "twin.macro";
import { NavigationItem } from "types/sanity.objects";
import { FullNavItem } from "./FullNavItem";
import NextLink from "next/link";
import { Dialog } from "@headlessui/react";
import { MobileMenuToggleButton } from "./MobileMenuToggle";
import Transition from "./Transition";
import { NavigationProps } from "../Nav";

/**
 * HeadlessUI "Dialog (Modal)"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/dialog
 */

type ModalProps = {
  navigation: NavigationItem[];
  onClose: () => void;
  visible?: boolean;
  children: React.ReactNode;
  dialogOverlayProps?: { as?: React.ElementType };
  titleProps?: { as?: React.ElementType };
  descriptionProps?: { as?: React.ElementType };
};

export default function Modal({
  navigation,
  onClose,
  visible,
  children,
  dialogOverlayProps,
}: ModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Fragment>
      <Transition show={visible} as={Fragment}>
        <Dialog
          tw="fixed inset-0 flex items-center justify-center h-screen w-screen"
          onClose={() => {}}
          unmount={true}>
          <MobileMenuToggleButton
            open={true}
            handleClick={onClose}
            hide={!visible}
          />
          <Transition.Child {...overlayTransitionProps} as="div">
            <Dialog.Overlay
              tw="fixed inset-0 bg-black z-10 opacity-75"
              {...dialogOverlayProps}
            />
          </Transition.Child>
          <Transition.Child {...contentTransitionProps} as={Fragment}>
            <div tw="z-20 w-full h-full overflow-y-auto flex py-8 inset-0 absolute bg-gray-900 text-white transition-all transform justify-center items-center">
              <div tw="text-center space-y-8 lg:h-auto">
                {navigation.map((item, _index) => (
                  <FullNavItem hide={!visible} {...item.navLink} />
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </Fragment>
  );
}

const overlayTransitionProps = {
  enter: tw`ease-out duration-300`,
  enterFrom: tw`opacity-0`,
  enterTo: tw`opacity-100`,
  leave: tw`ease-in duration-200`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
};

const contentTransitionProps = {
  enter: tw`ease-out duration-500`, // duration-300
  enterFrom: tw`opacity-0 scale-0`, // scale-95
  enterTo: tw`opacity-100 scale-100`,
  leave: tw`ease-in duration-500`, //duration-200
  leaveFrom: tw`opacity-100 scale-100`,
  leaveTo: tw`opacity-0 scale-0`, //scale-95
};

// const FloatingMenu = tw.a`fixed right-3.5 bottom-3.5 w-16 h-16 leading-10 z-50`

// const FullScreenNav = tw.div`flex justify-center items-center w-screen h-screen overflow-hidden bg-brand-orange p-8 text-center`

// const NavList = styled.ul(() => [
//   tw`list-none`,
//   css`
//     li {
//       ${tw`mb-5`}
//       &:last-child {
//         ${tw`mb-0`}
//       }
//       a {
//         ${tw`hocus:text-green-800`}
//       }
//     }
//   `
// ]);
