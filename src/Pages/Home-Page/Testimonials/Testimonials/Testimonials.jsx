import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { SwiperSlide } from "swiper/react";

import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import MySlider from "../../../../Components/MySlider/MySilder";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedbacks");
      return res.data;
    },
  });
  // console.log(testimonials)
  return (
    <>
      <div id="testimonials">
        <SectionTitle
          heading={"What Our Patients Says"}
          subTitle={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}
        />
      </div>

      <MySlider>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </MySlider>
    </>
  );
};

export default Testimonials;
