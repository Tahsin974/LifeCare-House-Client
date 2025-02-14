import { FaRegClock } from "react-icons/fa";
import ContactInfoCard from "./ContactInfoCard";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <ContactInfoCard icon={<FaRegClock size={40} />} color={"[#07332F]"}>
        <h2 className="card-title">Opening Hours</h2>
        <p>Open 9.00 am to 5.00pm Everyday </p>
      </ContactInfoCard>
      <ContactInfoCard icon={<FaLocationDot size={40} />} color={"orange-600"}>
        <h2 className="card-title">Our Locations</h2>
        <p>
          Dhanmondi 17, Dhaka -1200, Bangladesh
        </p>
      </ContactInfoCard>
      <ContactInfoCard icon={<FaRegClock size={40} />} color={"[#07332F]"}>
        <h2 className="card-title">Contact Us</h2>
        <p>
          +88 01750 00 00 00 <br /> +88 01750 00 00 00
        </p>
      </ContactInfoCard>
    </div>
  );
};

export default ContactInfo;
