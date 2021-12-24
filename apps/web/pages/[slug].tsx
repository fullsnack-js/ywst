import { getClient, sanityClient, usePreviewSubscription } from "@lib/sanity";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import {
  getAllRoutesWithSlug,
  getRoutePage,
  singleRouteQuery,
} from "@lib/queries";
import { Route } from "types/sanity.documents";
import Head from "next/head";
import { Router, useRouter } from "next/dist/client/router";
import ErrorPage from "next/error";
import { IndexLayout } from "@components/layouts";
import LegalPage from "@components/legal";
import HomePage from "@components/homePage";
import { ReactElement } from "react";

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
    return <LegalPage slug={routeResult.slug} page={routeResult.landingPage} />;
  } else {
    console.log("page component");
    return <HomePage slug={routeResult.slug} page={routeResult.landingPage} />;
  }
}

interface DataProps {
  pageData: Route;
  queryParams: { slug: string };
}

interface StaticProps {
  data: DataProps;
  preview: boolean;
}

export async function getStaticPaths() {
  const pageQueries = await getAllRoutesWithSlug();
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

  const pageData = await getRoutePage({ slug: slug! });
  console.log({ landingPage: pageData.landingPage });
  const queryParams = { slug: slug! };
  return {
    props: {
      data: { pageData, queryParams },
      preview,
    },

    revalidate: 60,
  };
};

export default function CustomPage({ data, preview }: StaticProps) {
  const router = useRouter();
  const slug = data?.queryParams ?? {};
  // const { data: freshData } = usePreviewSubscription(singleRouteQuery, {
  //   params: slug,
  //   initialData: data?.pageData,
  //   enabled: preview && Boolean(slug),
  // });
  // console.log({ pageData: data.pageData });
  const landingPage = data?.pageData[0]!;
  // if (!data?.pageData?.landingPage || !router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      <Head>
        <title> | YWST</title>
      </Head>
      <main tw="bg-gray-100 mt-12 mx-auto container p-8">
        {handleResults(landingPage)}
      </main>
    </>
  );
}

CustomPage.getLayout = (page: ReactElement) => (
  <IndexLayout>{page}</IndexLayout>
);
