import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <div id="contact-us">
            <div className="hero bg-[#07332F] min-h-screen text-white rounded-lg my-20 ">
  <div className="hero-content flex-col lg:flex-row lg:p-28 mg:p-28 p-10 lg:space-x-7">
    <div className="text-center lg:text-left space-y-4 max-w-md">
      <h1 className="text-5xl font-bold">Contact With Us</h1>
      <p className="py-6">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.
      </p>
      <p className="flex gap-2 items-center"><IoCall size={25} /> +88 01795981096</p>
      <p className="flex gap-2 items-center"><FaLocationDot size={25}/> Dhanmondi, Dhaka, Bangladesh</p>
    </div>
    <ContactForm/>
    
  </div>
</div>
        </div>
    );
};

export default ContactUs;