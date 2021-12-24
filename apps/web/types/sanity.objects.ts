import { Route } from "./sanity.documents";
export interface SanityBlock {
  [key: string]: any;
  _type: "block";
}
export type BlockContent = Array<
  | SanityBlock
  | AccessibleImage
  | AccessibleVideo
  | CaptionedImage
  | InlineImage
  | MuxVideos
>;

export type SanityImage = {
  _type: "image";
  asset: { url: string; [key: string]: any };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};
export type BlockText = SanityBlock[];

export type TextSection = {
  _key: string;
  _type: "textSection";
  heading?: string;
  text: BlockText;
};
export type Tag = string;
export type FaqItem = {
  _key: string;
  _type: "faqItem";
  question: string;
  answer: SanityBlock;
};

export type FaqSection = {
  _key: string;
  _type: "faqs";
  title?: string;
  items: FaqItem[];
};

export type NavigationItem = {
  _type: "navigationItem";
  _key: string;
  navLink:
    | {
        linkType: "external";
        link: {
          title: string;
          href: string;
        };
      }
    | {
        linkType: "internal";
        link: {
          title: string;
          route: Route;
        };
      };
};
// expands object types one level deep
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type Id<T> = T extends object ? {} & { [P in keyof T]: Id<T[P]> } : T;

// expands object types recursively
type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

export interface NavRoute extends Omit<Route, "landingPage"> {
  page: { _type: "reference"; _ref: string };
}

// post query result:
// "mainImage":{
// "_type":"image"
// "alt":"woman meditating at sunset"
// "asset":{...}
// "source":"Photo by @jareddrice on Unsplash"
// }
// return from query:
// SanityImage = {asset: object; crop?: object; hotspot?:object}
// { SanityImage & {source?:string; alt:string;}}

export type SanityAccessibleImage = {
  _type: "accessibleImage";
  image: SanityImage & {
    source?: string;
    alt: string;
  };
};

export type AccessibleImage = SanityAccessibleImage["image"];

export type ImageSection = {
  _key: string;
  _type: "imageSection";
  heading?: string;
  caption?: string;
  text?: SanityBlock;
  image: AccessibleImage;
};
export type PageSection = ImageSection | TextSection | FaqSection;
export type InlineImage = {
  _type: "inlineImage";
  image: SanityImage;
  alt: string;
  caption?: string;
};

export type CaptionedImage = {
  _type: "captionedImage";
  image: AccessibleImage;
  caption?: string;
};

export type Seo = {
  _type: "seo";
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: Tag[];
  metaImage?: SanityImage;
  favicon?: SanityImage;
};

export type Social = {
  _type: "social";
  _key: string;
  type:
    | "facebook"
    | "twitter"
    | "linkedin"
    | "instagram"
    | "whatsapp"
    | "youtube";
  url: string;
};

export type Setting = {
  _type: "setting";
  classType: "online" | "hybrid" | "studio";
  location: string;
  link: string;
};

export type EventCalendar = {
  _type: "eventCalendar";
  app: "google" | "apple";
  calendarId: string;
};

export type AccessibleVideo = {
  _type: "accessibleVideo";
  url?: string;
  file?: { _type: "file"; asset: any };
  alt?: string;
  autoplay?: boolean;
  loop?: boolean;
};

type MuxVideos = any;
