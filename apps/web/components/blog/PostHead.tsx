import Head from "next/head";

interface PostHeadProps {
  title: string;
  author: string;
  description: string;
  ogImage: string;
}

const PostHead = ({
  title,
  author = "Susan Turis",
  description,
  ogImage,
}: PostHeadProps) => (
  <Head>
    <title>{title} | YWST</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={`${title} | YWST `} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@susanturis" />
    <meta name="twitter:image" content={ogImage} />
    {/* Open Graph */}
    <meta property="og:title" content={`${title} | YWST `} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={description} />
    <meta property="og:author" content={author} />
    <meta property="og:image" content={ogImage} />
  </Head>
);

export default PostHead;
