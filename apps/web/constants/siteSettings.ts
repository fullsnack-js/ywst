import { SiteSettings } from "../types/sanity.documents";
export interface GlobalSettings
  extends Pick<
    SiteSettings,
    | "contactEmail"
    | "mainNav"
    | "footerNav"
    | "title"
    | "seo"
    | "socials"
    | "title"
  > {}

export const DEFAULT_SETTINGS: GlobalSettings = {
  contactEmail: "leslie718@protonmail.com",
  footerNav: [
    {
      _key: "b6dab4891ee7",
      _type: "navigationItem",
      navLink: {
        link: {
          route: {
            _createdAt: "2021-11-17T16:21:06Z",
            _id: "d9a6e36c-afb7-48e8-bdd4-ad7573ff77b3",
            _rev: "pPt326O5aSy2RL2bY8acdV",
            _type: "route",
            _updatedAt: "2021-11-24T19:24:50Z",
            includeInSitemap: true,
            page: { _type: "reference", _ref: "" },
            routeId: "bio",
            slug: "bio",
          },
          title: "Bio",
        },
        linkType: "internal",
      },
    },
    {
      _key: "4cb10e08246d",
      _type: "navigationItem",
      navLink: {
        link: { href: "https://www.iyagny.com", title: "IYAGNY" },
        linkType: "external",
      },
    },
    {
      _key: "50e4dcc845f0",
      _type: "navigationItem",
      navLink: {
        link: {
          route: {
            _createdAt: "2021-11-18T15:55:36Z",
            _id: "48206d8d-20be-42d2-bc15-1d010b6635a2",
            _rev: "F4I2ZtUM8TMtZeYeG6mNCe",
            _type: "route",
            _updatedAt: "2021-11-18T15:55:36Z",
            includeInSitemap: true,
            page: {
              _ref: "eb815141-7bc0-460d-b509-0879b0046bca",
              _type: "reference",
            },
            routeId: "privacy",
            slug: "privacy",
          },
          title: "Privacy Policy",
        },
        linkType: "internal",
      },
    },
    {
      _key: "b98ecbb7afe1",
      _type: "navigationItem",
      navLink: {
        link: {
          route: {
            _createdAt: "2021-11-16T16:06:48Z",
            _id: "604f402c-c39d-4e69-9f93-e0dc240d1d3a",
            _rev: "X2CCfDAfe4YjpItsawHMaA",
            _type: "route",
            _updatedAt: "2021-11-18T15:55:51Z",
            includeInSitemap: true,
            page: {
              _ref: "f73e121e-f43b-4629-a72a-700b7521ba20",
              _type: "reference",
            },
            routeId: "terms",
            slug: "terms-of-use",
          },
          title: "Terms of Use",
        },
        linkType: "internal",
      },
    },
  ],
  mainNav: [
    {
      _key: "781b9d37f019",
      _type: "navigationItem",
      navLink: {
        link: {
          route: {
            _createdAt: "2021-11-17T16:21:06Z",
            _id: "d9a6e36c-afb7-48e8-bdd4-ad7573ff77b3",
            _rev: "pPt326O5aSy2RL2bY8acdV",
            _type: "route",
            _updatedAt: "2021-11-24T19:24:50Z",
            includeInSitemap: true,
            page: { _type: "reference", _ref: "" },
            routeId: "bio",
            slug: "bio",
          },
          title: "Bio",
        },
        linkType: "internal",
      },
    },
    {
      _key: "82d9132315dc",
      _type: "navigationItem",
      navLink: {
        link: {
          route: {
            _createdAt: "2021-11-17T16:21:39Z",
            _id: "fc3be7c9-282d-48a3-8d45-e44a3091c776",
            _rev: "AGGmo2dCHdR93mQMAgpwFX",
            _type: "route",
            _updatedAt: "2021-11-17T16:21:39Z",
            includeInSitemap: true,
            page: {
              _ref: "fd3b0269-cc9a-49e0-868a-961431e974b5",
              _type: "reference",
            },
            routeId: "iyengar",
            slug: "about-iyengar",
          },
          title: "About Iyengar",
        },
        linkType: "internal",
      },
    },
  ],
  seo: {
    _type: "seo",
    metaDescription:
      "Susan Turis is an Iyengar yoga instructor based in Brooklyn, New York. She is associated with IYAGNY and has 20 years yoga experience.",
    metaImage: {
      _type: "image",
      asset: {
        _createdAt: "2021-11-15T21:59:04Z",
        _id: "image-a9b94281ff3ccf26343824ea15d15b14d9f153ab-1170x1560-jpg",
        _rev: "F4I2ZtUM8TMtZeYeFoN11G",
        _type: "sanity.imageAsset",
        _updatedAt: "2021-11-15T21:59:04Z",
        assetId: "a9b94281ff3ccf26343824ea15d15b14d9f153ab",
        extension: "jpg",
        metadata: {
          _type: "sanity.imageMetadata",
          dimensions: {
            _type: "sanity.imageDimensions",
            aspectRatio: 0.75,
            height: 1560,
            width: 1170,
          },
          hasAlpha: false,
          isOpaque: true,
          palette: {
            _type: "sanity.imagePalette",
            darkMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#343d5a",
              foreground: "#fff",
              population: 0.63,
              title: "#fff",
            },
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#724822",
              foreground: "#fff",
              population: 7.1,
              title: "#fff",
            },
            dominant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#724822",
              foreground: "#fff",
              population: 7.1,
              title: "#fff",
            },
            lightMuted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#cfc3a8",
              foreground: "#000",
              population: 5.99,
              title: "#fff",
            },
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#f7dd97",
              foreground: "#000",
              population: 0.17,
              title: "#000",
            },
            muted: {
              _type: "sanity.imagePaletteSwatch",
              background: "#ab7a56",
              foreground: "#fff",
              population: 0.65,
              title: "#fff",
            },
            vibrant: {
              _type: "sanity.imagePaletteSwatch",
              background: "#d2c233",
              foreground: "#000",
              population: 0.04,
              title: "#fff",
            },
          },
        },
        mimeType: "image/jpeg",
        originalFilename:
          "a9b94281ff3ccf26343824ea15d15b14d9f153ab-1170x1560.jpg",
        path: "images/9dosgtwx/production/a9b94281ff3ccf26343824ea15d15b14d9f153ab-1170x1560.jpg",
        sha1hash: "a9b94281ff3ccf26343824ea15d15b14d9f153ab",
        size: 343114,
        uploadId: "1e4gr3bB56FcH9Q5cdqukJLkR1qrWisQ",
        url: "https://cdn.sanity.io/images/9dosgtwx/production/a9b94281ff3ccf26343824ea15d15b14d9f153ab-1170x1560.jpg",
      },
    },
    metaKeywords: [
      "iyengar",
      "iyagny",
      "iyengar yoga susan turis",
      "iyengar yoga susan",
      "iyengar susan",
      "iyengar brooklyn teacher",
      "iyengar nyc teacher",
      "susan turis iyengar",
      "iyengar blog",
      "iyengar yoga blog",
      "yoga blog",
    ],
    metaTitle: "Yoga with Susan Turis",
  },
  socials: [
    {
      _key: "2f35d5f0aeb2",
      _type: "social",
      type: "facebook",
      url: "https://facebook.com/susanturis",
    },
    {
      _key: "183186ab6a2d",
      _type: "social",
      type: "instagram",
      url: "https://instagram.com/susanturis",
    },
  ],
  title: "Yoga with Susan Turis",
};
