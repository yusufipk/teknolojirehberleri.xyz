export default function Searchbar({ search, setSearch }) {
  return (
    <input
      className="searchbar"
      type="text"
      placeholder="Rehber ara"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
