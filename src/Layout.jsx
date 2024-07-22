import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Outlet />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
