import { externalLinkHandler, internalLinkHandler } from "./Links";
import { config } from "@lib/sanity";
import { createPortableTextComponent } from "next-sanity";
import { attachmentUrlHandler } from "./attachment";

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    marks: {
      strong: (props: any) => <strong>{props.children}</strong>,
      em: (props: any) => <em>{props.children}</em>,
      code: (props: any) => <code>{props.children}</code>,
      internalLink: internalLinkHandler,
      externalLink: externalLinkHandler,
      attachment: attachmentUrlHandler,
    },
    types: {
      captionedImage: (props: any) => {
        const { node } = props;
        if (!node) {
          console.log(props);
          console.log(node);
          return null;
        }
        return (
          <div>
            <img src={node.image} />
            {/* <Image node={node.image} /> */}
          </div>
        );
      },
      code: ({ node }: { node: any }) => (
        <pre data-language={node.language}>
          <code>{node.code}</code>
        </pre>
      ),
    },
  },
});
