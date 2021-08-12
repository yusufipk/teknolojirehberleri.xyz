import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";

export default function PostDetails({ posts }) {
  if (!posts)
    return (
      <div className="loading">
        <Head>
          <title> Loading... </title>
        </Head>
        <h1 className="heading-1 u-center-text">Yükleniyor...</h1>
      </div>
    );

  const { title, featuredImage, rehber, description } = posts.fields;
  return (
    <div className="markdown">
      <Head>
        <title>{title} - Teknoloji Rehberleri</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Teknoloji Rehberleri`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https:${featuredImage.fields.file.url}`}
        />
      </Head>

      <Image
        src={`https:${featuredImage.fields.file.url}`}
        alt={featuredImage.fields.file.fileName}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
        className="markdown_featuredImage"
      />

      <ReactMarkdown>{rehber}</ReactMarkdown>
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
    revalidate: 10,
  };
}
