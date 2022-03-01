import Head from "next/head";
import { createClient } from "contentful";
import marked from "marked";

export default function PostDetails({ posts }) {
  if (!posts)
    return (
      <div className="loading">
        <Head>
          <title> Yükleniyor... </title>
        </Head>
        <h1 className="heading-1 u-center-text">Yükleniyor...</h1>
      </div>
    );

  const { title, rehber, description } = posts.fields;
  function createMarkup() {
    return { __html: marked(rehber) };
  }

  return (
    <div className="markdown">
      <Head>
        <title>{title} - Teknoloji Rehberleri</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Teknoloji Rehberleri`} />
        <meta property="og:description" content={description} />
      </Head>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "rehber" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "rehber",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return { redirect: { destination: "/404", permanent: false } };
  }

  return {
    props: { posts: items[0] },
    revalidate: 300,
  };
}
