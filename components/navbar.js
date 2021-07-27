import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <h1 className="navbar_logo">Teknoloji Rehberleri</h1>
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
      </ul>
    </div>
  );
}

export default Navbar;
