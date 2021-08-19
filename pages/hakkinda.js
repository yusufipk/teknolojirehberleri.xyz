import Head from "next/head";

export default function Hakkinda() {
  return (
    <div className="about">
      <Head>
        <title>Site Hakkında - Teknoloji Rehberleri</title>
        <meta
          name="description"
          content="Teknoloji rehberleri. Reklam ve izleyici yok!"
        />
      </Head>

      <div>
        <h1 className="u-center-text u-margin-bottom-small">Site Hakkında</h1>
        <p>
          Bu websitesinde reklam, izleyici veya çerez yoktur ve herkes rehber
          yazabilir.
        </p>
      </div>
      <div>
        <h2>Nasıl Rehber Yazarım?</h2>
        <ul className="about_list">
          <li>
            <a href="https://raw.githubusercontent.com/yusufipk/teknolojirehberleri.xyz/master/%C3%96RNEK.md">
              Örnek rehbere
            </a>{" "}
            göz atın.{" "}
          </li>
          <li>
            <a href="mailto:teknolojirehberleri@protonmail.com">
              {" "}
              teknolojirehberleri@protonmail.com
            </a>{" "}
            adresine markdown dosyanızı gönderin.
          </li>
          <li>
            Veya Github'dan{" "}
            <a href="https://github.com/yusufipk/teknolojirehberleri.xyz/tree/master/rehberler">
              rehberler
            </a>{" "}
            klasörüne rehberinizi ekleyin.
          </li>
          <li>
            Başkasının yazısını{" "}
            <a href="https://github.com/yusufipk/teknolojirehberleri.xyz/tree/master/rehberler">
              Github'dan
            </a>{" "}
            indirip güncelleme yaptıktan sonra tekrar gönderebilirsiniz.{" "}
          </li>
          <li>Rehberi yazan/katkı sağlayan kişileri keşfedebilirsiniz!</li>
        </ul>
      </div>
    </div>
  );
}
