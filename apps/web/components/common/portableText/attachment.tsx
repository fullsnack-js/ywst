import React from "react";
import tw, { styled, css } from "twin.macro";
import { resolveSanityFileUrl } from "@utils/fileUrlResolver";

type AttachmentProps = {
  mark: {
    _type: "attachment";
    asset: {
      _ref: string;
      type: "reference";
    };
    name: string;
    text?: string;
  };
  children: React.ReactNode;
};

export const attachmentUrlHandler = ({ children, mark }: AttachmentProps) => {
  if (!mark?.asset || !mark?.name) {
    return null;
  }
  const { asset, name, text } = mark;
  const fileUrl = resolveSanityFileUrl(asset, name);

  return (
    <a tw="hocus:(bg-indigo-200 p-1 rounded)" download href={fileUrl}>
      <span role="img" aria-hidden>
        📎
      </span>
      <span>{text ?? children}</span>
    </a>
  );
};
