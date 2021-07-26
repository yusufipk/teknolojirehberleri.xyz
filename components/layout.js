import navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="children">{children}</div>
    </div>
  );
}

export default Layout;
