import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
