import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footerbar from "../components/Footerbar";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar (Top) */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-fill">
        <Outlet />
      </main>

      {/* Footer (Bottom) */}
      <Footerbar />
    </div>
  );
};

export default Layout;
