import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Header } from "./components/Header";

const Layout = () => {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen justify-between">
        <Header />
        <div className="flex flex-1">
          <Nav />
          <Outlet />
        </div>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;
