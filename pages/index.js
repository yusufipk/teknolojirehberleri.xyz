import Head from "next/head";
import Home from "../commons/home";

export default function App({ posts }) {
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
      <Home posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
