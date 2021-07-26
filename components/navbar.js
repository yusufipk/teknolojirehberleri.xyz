import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <h1>Teknoloji Rehberleri</h1>
      <ul className="navbar_list">
        <li
          className={
            router.asPath == "/"
              ? "navbar_list-item navbar_list-item--active"
              : "navbar_list-item"
          }
        >
          <Link href="/">Anasayfa</Link>
        </li>
        <li
          className={
            router.asPath == "/hakkinda"
              ? "navbar_list-item navbar_list-item--active"
              : "navbar_list-item"
          }
        >
          <Link href="/hakkinda"> Site Hakkında </Link>
        </li>
        <li
          className={
            router.asPath == "/yazigonder"
              ? "navbar_list-item navbar_list-item--active"
              : "navbar_list-item"
          }
        >
          <Link href="/yazigonder"> Yazı Gönder </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
