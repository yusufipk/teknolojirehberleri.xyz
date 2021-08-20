import { createClient } from "contentful";
import Head from "next/head";
import Home from "../commons/home";

export default function App({ rehberler }) {
  return (
    <div>
      <Head>
        <title>Teknoloji Rehberleri</title>
        <meta
          name="description"
          content="Teknoloji rehberleri. Reklam ve izleyici yok!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home rehberler={rehberler} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "rehber",
    order: "-fields.date",
  });

  return {
    props: {
      rehberler: res.items,
    },
    revalidate: 10,
  };
}
