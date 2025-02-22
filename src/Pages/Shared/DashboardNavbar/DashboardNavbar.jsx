import { Link } from "react-router";
import logo from "../../../assets/LOGO/logo.png";
import useAdmin from "../../../Hooks/useAdmin";

const DashboardNavbar = () => {
  const [isAdmin] = useAdmin();
  const navOptions = (
    <>
      {isAdmin ? (
        <>
          <li>
            <Link className="text-lg font-light hover:bg-slate-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-light hover:bg-slate-700"
              to="/dashboard/all-users"
            >
              All Users
            </Link>
          </li>
          <li>
            <Link className="text-lg font-light hover:bg-slate-700">
              Add a Doctor
            </Link>
          </li>
          <li>
            <Link className="text-lg font-light hover:bg-slate-700">
              Manage Doctors
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-light hover:bg-slate-700"
              to="/home#banner"
            >
              Home
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/dashboard/DashboardMyAppointments"
              className="text-lg font-light hover:bg-slate-700"
            >
              My Appointments
            </Link>
          </li>
          <li>
            <Link className="text-lg font-light hover:bg-slate-700">
              My Reviews
            </Link>
          </li>

          <li>
            <Link className="text-lg font-light hover:bg-slate-700">
              My History
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-light hover:bg-slate-700"
              to="/home#banner"
            >
              Home
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="me-auto ps-4  ">
      <div className="grid justify-items-center gap-y-6">
        {/* Navbar Logo */}
        <figure>
          <img src={logo} alt="Logo" className=" lg:flex hidden w-36 h-14" />
        </figure>
        {/* Nav Options */}
        <div>
          <ul className="menu menu-vertical text-white">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
