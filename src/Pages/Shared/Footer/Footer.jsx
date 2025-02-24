import { Link } from "react-router";
import logo from "../../../assets/LOGO/logo2.png";
import ButtonOutline from "../../../Components/ButtonOutline/ButtonOutline";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-white text-black p-10 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <aside className="lg:col-span-2 items-center space-y-2">
          <img src={logo} alt="Logo" className="w-36 h-14" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            saepe corrupti rem voluptas, quod et. Ea fuga est sit quos facilis
            et doloribus cum laudantium temporibus! Similique dolorem delectus
            ex!
          </p>
          <Link to="/appointment">
            <ButtonOutline>Appointment</ButtonOutline>
          </Link>
        </aside>
        <nav>
          <h6 className="footer-title uppercase">Quick Links</h6>
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Departments</a>
            </li>
            <li>
              <a>Online Payment</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>My Account</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title uppercase">LifeCare House Services</h6>
          <ul>
            <li>
              <a>Pediatric Clinic</a>
            </li>
            <li>
              <a>Diagnosis Clinic</a>
            </li>
            <li>
              <a>Cardiac Clinic</a>
            </li>
            <li>
              <a>Laboratory Analysis</a>
            </li>
            <li>
              <a>Gynecological Clinic</a>
            </li>
            <li>
              <a>Personal Counseling</a>
            </li>
            <li>
              <a>Dental Clinic</a>
            </li>
          </ul>
        </nav>
        <div>
          <h6 className="footer-title uppercase">Working Hours</h6>
          <ul>
            <li>Monday - 10 am to 7 pm</li>
            <li>Tuesday - 10 am to 7 pm</li>
            <li>Wednesday - 10 am to 7 pm</li>
            <li>Thursday - 10 am to 7 pm</li>
            <li>Friday - 10 am to 7 pm</li>
            <li>Saturday - 10 am to 7 pm</li>
            <li>Sunday - 10 am to 7 pm</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
