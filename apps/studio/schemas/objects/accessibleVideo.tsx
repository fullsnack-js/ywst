import React from "react";
import { MdVideoLabel, MdVideocam } from "react-icons/md";
import ReactPlayer from "react-player";

const Preview = ({ value: { url, autoplay, loop } }) => (
  <ReactPlayer muted={autoplay} url={url} playing={autoplay} loop={loop} />
);

export default {
  name: "accessibleVideo",
  title: "Accessible Video",
  icon: MdVideoLabel,
  type: "object",
  fields: [
    { name: "url", title: "Video Url", type: "url" },
    { name: "file", type: "file", title: "Video File" },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description:
        "Used to describe the contents of the video to assistive technology",
      validation: (Rule) => Rule.required(),
    },
    { name: "autoplay", title: "Autoplay Video", type: "boolean" },
    { name: "loop", title: "Loop Video", type: "boolean" },
  ],
  preview: {
    select: {
      url: "url",
      autoplay: "autoplay",
      loop: "loop",
    },
    component: Preview,
  },
};
