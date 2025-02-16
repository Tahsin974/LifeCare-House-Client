import logo from "../../../assets/LOGO/logo2.png";
import ButtonOutline from "../../../Components/ButtonOutline/ButtonOutline";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <aside className="lg:col-span-2 items-center space-y-2">
          <img src={logo} alt="Logo" className="w-36 h-14" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            saepe corrupti rem voluptas, quod et. Ea fuga est sit quos facilis
            et doloribus cum laudantium temporibus! Similique dolorem delectus
            ex!
          </p>
          <ButtonOutline>Appointment</ButtonOutline>
        </aside>
        <nav>
          <h6 className="footer-title uppercase">Quick Links</h6>
          <p>About Us</p>
          <p>Service</p>
          <p>Doctors</p>
          <p>Departments</p>
          <p>Online Payment</p>
          <p>Contact Us</p>
          <p>My Account</p>
        </nav>
        <nav>
          <h6 className="footer-title uppercase">LifeCare House Services</h6>
          <p>Pediatric Clinic</p>
          <p>Diagnosis Clinic</p>
          <p>Cardiac Clinic</p>
          <p>Laboratory Analysis</p>
          <p>Gynecological Clinic</p>
          <p>Personal Counseling</p>
          <p>Dental Clinic</p>
        </nav>
        <nav>
          <h6 className="footer-title uppercase">Working Hours</h6>
          <p>Monday - 10 am to 7 pm</p>
          <p>Tuesday - 10 am to 7 pm</p>
          <p>Wednesday - 10 am to 7 pm</p>
          <p>Thursday - 10 am to 7 pm</p>
          <p>Friday - 10 am to 7 pm</p>
          <p>Saturday - 10 am to 7 pm</p>
          <p>Sunday - 10 am to 7 pm</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
