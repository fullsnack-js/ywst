import {
  BlockContent,
  Tag,
  Social,
  Seo,
  NavigationItem,
  BlockText,
  SanityBlock,
  AccessibleImage,
  Setting,
  EventCalendar,
  PageSection,
} from "./sanity.objects";

interface BaseDocument {
  [key: string]: unknown;
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}
export interface Class extends BaseDocument {
  _type: "class";
  title: string;
  level: string;
  description: string;
  eventCalendar: EventCalendar;
  setting: Setting;
}

export interface DisplayPost extends BaseDocument {
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

export interface Category extends BaseDocument {
  _type: "category";
  title: string;
  description?: string;
  mainImage?: AccessibleImage;
}

export interface Person extends BaseDocument {
  _type: "person";
  name: string;
  email: string;
  role: "author" | "manager";
  slug?: string;
  image?: AccessibleImage;
  bio?: SanityBlock;
}

export type Author = Required<Person> & { role: "author" };
export type Manager = Pick<Person, "_id" | "name" | "email"> & {
  role: "manager";
};

export interface Legal extends BaseDocument {
  _type: "legal";
  title: string;
  content: BlockText;
  contact: Manager;
  last_modified: string;
}

export interface Page extends BaseDocument {
  _type: "page";
  pageId: string;
  title: string;
  tagline?: SanityBlock;
  content?: Array<PageSection>;
  seo?: Seo;
}

export type RoutePage = Legal | Page;

export interface Route extends BaseDocument {
  _type: "route";
  routeId: string;
  landingPage: RoutePage;
  slug: string;
  includeInSitemap?: boolean;
  disallowRobots?: boolean;
}

export interface SiteSettings extends BaseDocument {
  _type: "siteSettings";
  title: string;
  contactEmail: string;
  mainNav: NavigationItem[];
  footerNav: NavigationItem[];
  socials: Social[];
  seo: Seo;
}
