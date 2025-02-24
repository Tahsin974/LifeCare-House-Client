import { Avatar } from "@heroui/react";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../../../Context/useAuthContext";
import { HashLink } from "react-router-hash-link";
import img from "../../../assets/SignUp/user.png";
import logo from "../../../assets/LOGO/logo.png";
import { FiMenu } from "react-icons/fi";
const MenuBar = ({ children }) => {
  const { user, setUser, userLogOut } = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut().then(() => {
      setUser(null);
      navigate("/");
    });
  };

  const navOptions = (
    <>
      {/* Before Login Options */}
      <li>
        <HashLink className="text-lg font-semibold" to="/home#banner">
          Home
        </HashLink>
      </li>
      <li>
        <HashLink className="text-lg font-semibold" to="/about">
          About
        </HashLink>
      </li>

      <li>
        <HashLink className="text-lg font-semibold" to="/home#contact-us">
          Contact Us
        </HashLink>
      </li>
      <li>
        <HashLink className="text-lg font-semibold" to="/home#testimonials">
          Testimonials
        </HashLink>
      </li>
      <li>
        <HashLink className="text-lg font-semibold" to="/appointment">
          Appointment
        </HashLink>
      </li>

      {user?.email && (
        <>
          <li>
            <HashLink className="text-lg font-semibold" to="/dashboard">
              Dashboard
            </HashLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="">
          <div className="navbar fixed z-10  text-white  items-center bg-[#07332F]  lg:px-24 md:px-10 sm:px-10">
            <div className="navbar-start ">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost lg:hidden"
              >
                <FiMenu size={25} />
              </label>
              <img
                src={logo}
                alt="Logo"
                className=" lg:flex hidden w-36 h-14"
              />
            </div>

            <div className="navbar-center ">
              <img src={logo} alt="Logo" className="w-36 h-14 lg:hidden flex" />
              <ul className="menu menu-horizontal hidden lg:flex">
                {navOptions}
              </ul>
            </div>
            <div className="navbar-end">
              {user?.email ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle bg-slate-400 hover:bg-slate-400 shadow-lg "
                  >
                    <Avatar src={user?.photoURL || img} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-gray-600 bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1  font-semibold"
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
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline rounded-none lg:btn-md md:btn-md btn-sm border-white text-white hover:bg-white hover:border-white hover:text-black">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Page content here */}
        <div className="z-0">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-zinc-900 bg-opacity-70 text-white min-h-full max-w-80 p-4 mt-[71px]">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
