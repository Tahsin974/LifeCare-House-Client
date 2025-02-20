import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DoctorCard from "../DoctorCard/DoctorCard";
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDoctors from "../../../../Hooks/useDoctors";
import MySlider from "../../../../Components/MySlider/MySilder";

const Doctors = () => {
  const { doctors } = useDoctors();

  // console.log(doctors);
  return (
    <div className="min-h-screen my-20">
      <SectionTitle
        heading={"Our Expert Doctors"}
        subTitle={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}
      />

      <MySlider>
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor._id}>
            <DoctorCard doctor={doctor} />
          </SwiperSlide>
        ))}
      </MySlider>
    </div>
  );
};

export default Doctors;
