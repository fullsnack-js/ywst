import { internalLink, externalLink } from "./fields";

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },

        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strikethrough", value: "strike-through" },
        ],
        annotations: [externalLink, internalLink(["post", "route"])],
      },
    },
    { type: "accessibleImage" },
    { type: "inlineImage" },
    { type: "captionedImage" },
    { type: "accessibleVideo" },
    { type: "muxVideos" },
  ],
};
