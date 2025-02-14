import { Outlet } from "react-router";
import MenuBar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useLocation } from "react-router";

const MainLayOut = () => {
  const location = useLocation();
  const isMenuBar =
    location.pathname === "/login" || location.pathname === "/sign-up";
  return (
    <div className="min-h-screen">
      {!isMenuBar ? (
        <MenuBar>
          <div className="min-h-screen">
            <Outlet />
          </div>
        </MenuBar>
      ) : (
        <div className="min-h-screen">
          <Outlet />
        </div>
      )}

      {!isMenuBar && <Footer />}
    </div>
  );
};

export default MainLayOut;
