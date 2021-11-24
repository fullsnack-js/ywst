const title = "Yoga with Susan Turis";
const description = "Susan Turis Iyengar Yoga Instructor Blog";
const url = "http://localhost:3000/";

const config = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    site_name: "YWST",
    title,
    description,
    images: [
      {
        url: "",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default config;
