import { Outlet } from "react-router-dom";
import Header from "../ui/header/header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;