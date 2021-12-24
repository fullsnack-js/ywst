import { PortableText } from "@components/common/portableText/Block";
import React from "react";
import { BlockContent, BlockText, SanityBlock } from "types/sanity.objects";

type Props = {
  content: BlockContent | SanityBlock | BlockText;
};

const PostBody: React.FC<Props> = ({ content }) => (
  <div tw="font-body text-black prose lg:prose-xl mx-auto max-w-2xl">
    <PortableText blocks={content} />
  </div>
);

export default PostBody;
