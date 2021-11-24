import { getClient, sanityClient, usePreviewSubscription } from "@lib/sanity";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import {
  singleRouteQuery,
  allRoutePathsQuery,
  globalSettingsQuery,
} from "@lib/queries";
import { Route, SiteSettings as GlobalSettings } from "types/sanity.documents";
import Head from "next/head";
import { Router, useRouter } from "next/dist/client/router";
import ErrorPage from "next/error";
import { NextPropsWithLayout } from "types/page";
import type { AppProps } from "next/app";
import { IndexLayout } from "@components/layouts";

const JSONPreview = ({
  landingPage,
  slug,
}: Pick<Route, "landingPage" | "slug">) => {
  return (
    <>
      <h3>{slug}</h3>
      <div>{JSON.stringify(landingPage, null, 4)}</div>
    </>
  );
};

function handleResults(routeResult: any) {
  console.log({ routeResult });
  if (!("landingPage" in routeResult)) return;
  if (!("slug" in routeResult)) return;
  if (routeResult["landingPage"]["_type"] === "legal") {
    console.log("legal component");
    return (
      <JSONPreview
        slug={routeResult.slug}
        landingPage={routeResult.landingPage}
      />
    );
  } else {
    console.log("page component");
    return (
      <JSONPreview
        slug={routeResult.slug}
        landingPage={routeResult.landingPage}
      />
    );
  }
}

interface DataProps {
  pageData: Route;
  queryParams: { slug: string };
  siteSettings?: GlobalSettings;
}

interface StaticProps {
  data: DataProps;
  preview: boolean;
}

export async function getStaticPaths() {
  const pageQueries = await sanityClient.fetch(allRoutePathsQuery);
  console.log({ pageQueries });

  const paths = pageQueries.map((slug: string) => ({
    params: {
      slug,
    },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<StaticProps>> => {
  console.log({ slug: params?.slug });
  if (!params?.slug) {
    console.log("no slug");
  }
  const slug = params?.slug?.toString();
  const siteSettings = await sanityClient.fetch<GlobalSettings>(
    globalSettingsQuery
  );

  const pageData = await sanityClient.fetch<Route>(singleRouteQuery, { slug });
  const queryParams = { slug: slug! };
  return {
    props: {
      data: { pageData, siteSettings, queryParams },
      preview,
    },

    revalidate: 60,
  };
};

export default function CustomPage({ data, preview }: StaticProps) {
  const router = useRouter();
  // const slug = data?.queryParams ?? {};
  // const { data: freshData } = usePreviewSubscription(singleRouteQuery, {
  //   params: slug,
  //   initialData: data?.pageData,
  //   enabled: preview && Boolean(slug),
  // });
  console.log({ pageData: data.pageData });
  const landingPage = data?.pageData[0]!;
  // if (!data?.pageData?.landingPage || !router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      <Head>
        <title> | YWST</title>
      </Head>
      <h1>hi</h1>
      {handleResults(landingPage)}
    </>
  );
}

CustomPage.getLayout = (page: NextPropsWithLayout) => {
  const { data, preview } = page.pageProps;

  return <IndexLayout siteSettings={data.siteSettings} {...page} />;
};
