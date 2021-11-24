import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Description — `string`
   *
   * The description displayed throughout the site under the category name
   */
  description?: string;

  /**
   * Main Image — `accessibleImage`
   *
   * The main image displayed on the category page
   */
  mainImage?: AccessibleImage;

  /**
   * Slug — `slug`
   *
   * ⚠️ CHANGING THE SLUG OF AN EXISTING DOCUMENT IS USUALLY A BAD IDEA. Speak to the admin / developer before doing so
   */
  slug?: { _type: "slug"; current: string };
}

/**
 * Class
 *
 *
 */
export interface Class extends SanityDocument {
  _type: "class";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Level — `string`
   *
   *
   */
  level: string;

  /**
   * Class Description — `text`
   *
   *
   */
  description: string;

  /**
   * eventCalendar — `eventCalendar`
   *
   *
   */
  eventCalendar: EventCalendar;

  /**
   * setting — `setting`
   *
   *
   */
  setting: Setting;
}

/**
 * Legal Terms & Agreements
 *
 *
 */
export interface Legal extends SanityDocument {
  _type: "legal";

  /**
   * Icon — `iconPicker`
   *
   *
   */
  icon?: IconPicker;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Content — `blockText`
   *
   *
   */
  content: BlockText;

  /**
   * Policy Contact Information — `reference`
   *
   * Required person responsible for managing policy inquiries
   */
  contact: SanityReference<Person>;

  /**
   * Date Modified — `datetime`
   *
   *
   */
  last_modified: string;
}

/**
 * Pages
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Page Id — `string`
   *
   *
   */
  pageId: string;

  /**
   * Icon — `iconPicker`
   *
   *
   */
  icon?: IconPicker;

  /**
   * Heading — `string`
   *
   *
   */
  title: string;

  /**
   * Subheading — `simpleBlock`
   *
   * Optional tagline displayed under heading
   */
  tagline?: SimpleBlock;

  /**
   * Page Sections — `array`
   *
   * Drag and drop sections to represent layout order on website.
   */
  content?: Array<SanityKeyed<TextSection> | SanityKeyed<Faqs>>;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Email — `string`
   *
   * The email address associated to this person
   */
  email: string;

  /**
   * Role — `string`
   *
   * Select the type of role this person has
   */
  role: "author" | "manager";

  /**
   * Slug — `slug`
   *
   * ⚠️ CHANGING THE SLUG OF AN EXISTING DOCUMENT IS USUALLY A BAD IDEA. Speak to the admin / developer before doing so
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `accessibleImage`
   *
   *
   */
  image?: AccessibleImage;

  /**
   * Bio — `simpleBlock`
   *
   *
   */
  bio?: SimpleBlock;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * ⚠️ CHANGING THE SLUG OF AN EXISTING DOCUMENT IS USUALLY A BAD IDEA. Speak to the admin / developer before doing so
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author: SanityReference<Person>;

  /**
   * Main Image — `accessibleImage`
   *
   *
   */
  mainImage: AccessibleImage;

  /**
   * Categories — `array`
   *
   *
   */
  categories: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   * By default, is set to the current time. Can schedule the post to be displayed at a later date and time.
   */
  publishedAt: string;

  /**
   * Content — `blockContent`
   *
   *
   */
  content: BlockContent;

  /**
   * Post Search Tags — `tags`
   *
   * Keywords for search engines
   */
  tags?: Tags;

  /**
   * Excerpt — `text`
   *
   *
   */
  excerpt?: string;

  /**
   * Hide this post? — `boolean`
   *
   * Turn this on to hide it from the public and bots.
   */
  hidden?: boolean;

  /**
   * SEO — `seo`
   *
   * OPTIONAL: If you want to override the default settings for this post, update any of the fields below.
   */
  seo?: Seo;
}

/**
 * Route
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * Route Id — `string`
   *
   *
   */
  routeId: string;

  /**
   * Page Reference — `object`
   *
   * Select the page that this route should point to
   */
  page: {
    _type: "page";
    /**
     * Reference — `reference`
     *
     *
     */
    reference: SanityReference<Page | Legal>;
  };

  /**
   * Slug — `slug`
   *
   * ⚠️ CHANGING THE SLUG OF AN EXISTING DOCUMENT IS USUALLY A BAD IDEA. Speak to the admin / developer before doing so
   */
  slug: { _type: "slug"; current: string };

  /**
   * Include in sitemap — `boolean`
   *
   * For search engines. Will be generateed to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines like google
   */
  disallowRobots?: boolean;
}

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Website title — `string`
   *
   *
   */
  title?: string;

  /**
   * Contact Email — `string`
   *
   * Reply email for website contact page
   */
  contactEmail: string;

  /**
   * Main navigation — `array`
   *
   * Drag and drop items to represent the display order on the website main navigation
   */
  mainNav: Array<SanityKeyed<NavigationItem>>;

  /**
   * Footer navigation — `array`
   *
   * Drag and drop items to represent the display order on the website footer navigation
   */
  footerNav: Array<SanityKeyed<NavigationItem>>;

  /**
   * Social Media Accounts — `array`
   *
   *
   */
  socials: Array<SanityKeyed<Social>>;

  /**
   * Default SEO — `seo`
   *
   *
   */
  seo: Seo;
}

export type AccessibleVideo = {
  _type: "accessibleVideo";
  /**
   * Video Url — `url`
   *
   *
   */
  url?: string;

  /**
   * Video File — `file`
   *
   *
   */
  file?: { _type: "file"; asset: SanityReference<any> };

  /**
   * Alternative text — `string`
   *
   * Used to describe the contents of the video to assistive technology
   */
  alt?: string;

  /**
   * Autoplay Video — `boolean`
   *
   *
   */
  autoplay?: boolean;

  /**
   * Loop Video — `boolean`
   *
   *
   */
  loop?: boolean;
};

export type AccessibleImage = {
  _type: "accessibleImage";
  /**
   * Image — `image`
   *
   * The original image file. The higher the resolution, the better.
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Image Source — `string`
     *
     *
     */
    source?: string;

    /**
     * Alternative text — `string`
     *
     * Used to describe the contents of the image to assistive technology
     */
    alt: string;
  };
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<AccessibleImage>
  | SanityKeyed<InlineImage>
  | SanityKeyed<CaptionedImage>
  | SanityKeyed<AccessibleVideo>
  | SanityKeyed<MuxVideos>
>;

export type BlockText = Array<SanityKeyed<SanityBlock>>;

export type CaptionedImage = {
  _type: "captionedImage";
  /**
   * Image — `accessibleImage`
   *
   * The image
   */
  image?: AccessibleImage;

  /**
   * Caption — `string`
   *
   * The caption text (optional)
   */
  caption?: string;
};

export type Setting = {
  _type: "setting";
  /**
   * Class Type — `string`
   *
   * Where will this be taught? Live in-person, online or a hybrid...?
   */
  classType?: "online" | "hybrid" | "studio";

  /**
   * Location — `string`
   *
   * Name of the studio or yoga organization providing this class
   */
  location?: string;

  /**
   * Link — `url`
   *
   * Link to the event site (e.g. registration link)
   */
  link?: string;
};

export type EventCalendar = {
  _type: "eventCalendar";
  /**
   * Calendar App — `string`
   *
   *
   */
  app?: "google" | "apple";

  /**
   * Calendar ID — `string`
   *
   *
   */
  calendarId?: string;
};

export type FaqItem = {
  _type: "faqItem";
  /**
   * Question — `string`
   *
   *
   */
  question?: string;

  /**
   * Answer — `simpleBlock`
   *
   *
   */
  answer?: SimpleBlock;
};

export type Faqs = {
  _type: "faqs";
  /**
   * FAQ Title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<FaqItem>>;
};

export type InlineImage = {
  _type: "inlineImage";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Caption — `string`
   *
   * Optional. If provided, caption will be displayed underneath the image.
   */
  caption?: string;

  /**
   * Alt Text — `string`
   *
   * Required: A brief description of image for accessability (1-5 words)
   */
  alt?: string;
};

export type MuxVideos = MuxVideo;

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Navigation Text — `string`
   *
   *
   */
  navText?: string;

  /**
   * Navigation Item URL — `object`
   *
   *
   */
  navLink?: {
    _type: "navLink";
    /**
     * Select the type of link — `string`
     *
     * External links go to other websites using the format `https://www.google.com`. Internal links are restricted to YWST pages.
     */
    linkType?: "external" | "internal";

    /**
     * Internal Link — `object`
     *
     *
     */
    internalLink?: {
      _type: "internalLink";
      /**
       * Reference — `reference`
       *
       *
       */
      reference: SanityReference<Route>;
    };

    /**
     * URL — `url`
     *
     *
     */
    href?: string;
  };
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta Description — `text`
   *
   * This ends up on summary pages, Google, whenever people share your post in social media...
   */
  metaDescription?: string;

  /**
   * Meta Keywords — `tags`
   *
   * Keywords for search engines
   */
  metaKeywords?: Tags;

  /**
   * Meta Image — `image`
   *
   * A share image will be cropped to 1200x630. This will be used as the default sharing image if any pages do not include one.
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Favicon — `image`
   *
   *
   */
  favicon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type SimpleBlock = Array<SanityKeyed<SanityBlock>>;

export type Social = {
  _type: "social";
  /**
   * Type — `string`
   *
   *
   */
  type?:
    | "facebook"
    | "twitter"
    | "linkedin"
    | "instagram"
    | "whatsapp"
    | "youtube";

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type TextSection = {
  _type: "textSection";
  /**
   * Heading — `string`
   *
   * Optional heading for the text section. Leave out if heading should be the above page heading
   */
  heading?: string;

  /**
   * Text — `blockText`
   *
   *
   */
  text?: BlockText;
};

export type Documents =
  | Category
  | Class
  | Legal
  | Page
  | Person
  | Post
  | Route
  | SiteSettings;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type IconPicker = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Tags = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type MuxVideo = any;
