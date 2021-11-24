import { SanityDocument } from "@sanity/types";
import {
  BlockContent,
  Tag,
  Social,
  Seo,
  NavigationItem,
  BlockText,
  TextSection,
  FaqSection,
  SanityBlock,
  AccessibleImage,
  Setting,
  EventCalendar,
} from "./sanity.objects";

export interface Class extends SanityDocument {
  _type: "class";
  title: string;
  level: string;
  description: string;
  eventCalendar: EventCalendar;
  setting: Setting;
}

export interface DisplayPost extends SanityDocument {
  _type: "post";
  _id: string;
  title: string;
  slug: string;
  publishedAt: string /** datetime */;
  author: Author;
  categories: Category[];
  estimatedReadingTime: number;
  tags?: Tag[];
  mainImage: AccessibleImage;
  excerpt?: string;
  hidden?: boolean;
}
export type Post = DisplayPost & { content: BlockContent; seo?: Seo };

export interface Category extends SanityDocument {
  _type: "category";
  title: string;
  description?: string;
  mainImage?: AccessibleImage;
}

export interface Person extends SanityDocument {
  _type: "person";
  name: string;
  email: string;
  role: "author" | "manager";
  slug?: string;
  image?: AccessibleImage;
  bio?: SanityBlock;
}

export type Author = Required<Person> & { role: "author" };
export type Manager = Omit<Author, "bio" | "slug" | "image"> & {
  role: "manager";
};

export interface DisplayPost extends Omit<Post, "content" | "seo"> {}

export interface Legal extends SanityDocument {
  _type: "legal";
  title: string;
  content: BlockText;
  contact: Manager;
  last_modified: string;
}

export interface Page extends SanityDocument {
  _type: "page";
  pageId: string;
  title: string;
  tagline?: SanityBlock;
  content?: Array<TextSection | FaqSection>;
  seo?: Seo;
}

export type RoutePage = Legal | Page;

export interface Route extends SanityDocument {
  _type: "route";
  routeId: string;
  landingPage: RoutePage;
  slug: string;
  includeInSitemap?: boolean;
  disallowRobots?: boolean;
}

export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";
  title: string;
  contactEmail: string;
  mainNav: NavigationItem[];
  footerNav: NavigationItem[];
  socials: Social[];
  seo: Seo;
}
