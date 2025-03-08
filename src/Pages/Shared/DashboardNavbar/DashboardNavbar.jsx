import logo from "../../../assets/LOGO/logo.png";

const DashboardNavbar = ({ navOptions }) => {
  // const isAdmin = true;

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
