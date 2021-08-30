import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <Head>
        <title>404</title>
      </Head>
      <h1 className="heading-1">404</h1>
      <h2 className="heading-2">Aradığınız sayfa bulunamadı!</h2>
      <p>
        Sizi <Link href="/">anasayfaya</Link> yönlendiriyorum.
      </p>
    </div>
  );
}
