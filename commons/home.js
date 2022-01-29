import { useEffect, useState } from "react";
import Searchbar from "../components/searchbar";
import Link from "next/link";

export default function Home({ rehberler }) {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(rehberler.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      let filteredPosts =
        search.length === 0
          ? rehberler
          : rehberler.filter((rehber) =>
              rehber.fields.title.toLowerCase().includes(search.toLowerCase())
            );

      setCurrentPage(1);
      setPosts(filteredPosts);
    };

    fetchPosts();
  }, [search.length]);

  return (
    <div className="homepage">
      <h1>Rehberler</h1>
      <Searchbar
        className="homepage_searchbar"
        search={search}
        setSearch={setSearch}
      />

      <div className="homepage_posts">
        {currentPosts.map((rehber) => (
          <li key={rehber.fields.title}>
            <Link href={`/rehber/${rehber.fields.slug}`}>
              {rehber.fields.title}
            </Link>
          </li>
        ))}
      </div>

      <ul className="homepage_pagination">
        {pageNumbers.map((number) => (
          <a onClick={() => paginate(number)} key={number}>
            {number}
          </a>
        ))}
      </ul>
    </div>
  );
}
