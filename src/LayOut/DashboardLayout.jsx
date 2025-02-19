import { IoMdMenu } from "react-icons/io";
import DashboardNavbar, {
  navOptions,
} from "../Pages/Shared/DashboardNavbar/DashboardNavbar";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import useToggleContext from "../Context/useToggleContext";
import { Link, Outlet, useNavigate } from "react-router";
import logo from "../assets/LOGO/logo.png";
import useAuthContext from "../Context/useAuthContext";
import img from "../assets/SignUp/user.png";

const DashboardLayOut = () => {
  const [toggle, setToggle] = useToggleContext();
  const { user, userLogOut, setUser } = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut().then(() => {
      setUser(null);
      navigate("/");
    });
  };

  return (
    <div>
      <div className=" bg-white min-h-screen m-0">
        <div className="flex">
          <div
            className={`lg:flex hidden sticky z-10 left-0 bg-[#212631] min-h-screen py-5 w-72 duration-500  overflow-hidden  ${
              toggle && "w-[0px] overflow-hidden"
            }`}
          >
            <DashboardNavbar />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="drawer">
                <input
                  id="my-drawer-3"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                  {/* Navbar */}
                  <div className="navbar bg-white w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle lg:flex hidden "
                      onClick={() => setToggle(!toggle)}
                    >
                      <IoMdMenu size={30} />
                    </div>
                    <div className="flex-none lg:hidden">
                      <label
                        htmlFor="my-drawer-3"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                      >
                        <IoMdMenu size={30} />
                      </label>
                    </div>

                    <div className=" ms-auto ">
                      <button className="btn btn-ghost btn-circle">
                        <FaSearch size={20} />
                      </button>
                      <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <IoNotifications size={20} />
                        </div>
                      </button>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img alt="user photo" src={user?.photoURL || img} />
                          </div>
                        </div>

                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-gray-600 bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1  font-semibold text-white"
                        >
                          <li>
                            <Link className=" text-lg">Profile</Link>
                          </li>
                          <li>
                            <Link to="/my-appointments" className=" text-lg">
                              My Appointments
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleLogOut}
                              className="btn btn-sm bg-gray-300 border-gray-300 text-black"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Page content here */}
                  <Outlet />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu bg-[#212631] min-h-full max-w-80 text-white p-4">
                    {/* Navbar Logo */}
                    <figure>
                      <img src={logo} alt="Logo" className=" flex  w-36 h-14" />
                    </figure>
                    {/* Nav Options */}
                    <div>
                      <ul className="menu menu-vertical text-white">
                        {navOptions}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
