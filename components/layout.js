import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="children">{children}</div>
    </div>
  );
}

export default Layout;
