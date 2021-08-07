export default function Home({ posts }) {
  return (
    <div className="homepage">
      <h1 className="homepage_heading-1">Rehberler</h1>
      <div className="homepage_posts">
        {posts.slice(0, 20).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}
