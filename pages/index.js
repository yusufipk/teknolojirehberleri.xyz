import Head from "next/head";
import Home from "../commons/home";

export default function App() {
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
      <Home />
    </div>
  );
}
