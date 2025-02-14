import ContactUs from "../ContactUs/ContactUs";
import Doctors from "../Doctors/Doctors/Doctors";
import HomeBanner from "../HomePageBanner/HomeBanner";
import ContactInfo from "../OurServices/ContactInfo/ContactInfo";
import OurServices from "../OurServices/OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials/Testimonials";

const Home = () => {
   
    return (
        <div>
            <HomeBanner/>
            <OurServices/>
            <ContactInfo/>
            <Testimonials/>
            <Doctors/>
            <ContactUs/>          
            
        </div>
    );
};

export default Home;