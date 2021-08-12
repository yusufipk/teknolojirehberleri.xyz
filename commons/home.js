import { useState } from "react";
import Searchbar from "../components/searchbar";
export default function Home({ posts }) {
  const [search, setSearch] = useState("");
  const filteredPosts =
    search.length === 0
      ? posts
      : posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="homepage">
      <Searchbar search={search} setSearch={setSearch} />

      <h1>Rehberler</h1>
      <div className="homepage_posts">
        {filteredPosts.slice(0, 21).map((post) => (
          <li key={post.id}>
            <a href="https://searx.yusufipek.me">{post.title}</a>
          </li>
        ))}
      </div>
    </div>
  );
}
