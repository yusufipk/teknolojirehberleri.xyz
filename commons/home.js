import { useState } from "react";
import Searchbar from "../components/searchbar";
import Link from "next/link";

export default function Home({ rehberler }) {
  const [search, setSearch] = useState("");
  const filteredPosts =
    search.length === 0
      ? rehberler
      : rehberler.filter((rehber) =>
          rehber.fields.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="homepage">
      <Searchbar search={search} setSearch={setSearch} />

      <h1>Rehberler</h1>
      <div className="homepage_posts">
        {filteredPosts.slice(0, 21).map((rehber) => (
          <li key={rehber.fields.title}>
            <Link href={`/rehber/${rehber.fields.slug}`}>
              {rehber.fields.title}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
