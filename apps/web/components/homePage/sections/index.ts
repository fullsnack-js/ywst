import dynamic from "next/dynamic";

export const FaqSectionUi = dynamic(() => import("./faqs"));
export const ImageSectionUi = dynamic(() => import("./imageSection"));
export const TextSectionUi = dynamic(() => import("./textSection"));
