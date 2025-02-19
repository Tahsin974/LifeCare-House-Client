import { Link } from "react-router";
import logo from "../../../assets/LOGO/logo.png";
export const navOptions = (
  <>
    {/* Before Login Options */}
    <li>
      <Link
        to="/dashboard/DashboardMyAppointments"
        className="text-lg font-light hover:bg-slate-700"
      >
        My Appointments
      </Link>
    </li>
    <li>
      <Link className="text-lg font-light hover:bg-slate-700">My Reviews</Link>
    </li>

    <li>
      <Link className="text-lg font-light hover:bg-slate-700">My History</Link>
    </li>
    <li>
      <Link className="text-lg font-light hover:bg-slate-700" to="/home#banner">
        Home
      </Link>
    </li>
  </>
);
const DashboardNavbar = () => {
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
