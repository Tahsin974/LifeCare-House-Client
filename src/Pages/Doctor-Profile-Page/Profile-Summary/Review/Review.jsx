import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import MySlider from "../../../../Components/MySlider/MySilder";
import { SwiperSlide } from "swiper/react";
import TestimonialCard from "../../../Home-Page/Testimonials/TestimonialCard/TestimonialCard";

const Review = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [] } = useQuery({
    queryKey: [axiosPublic, "testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedbacks");
      return res.data;
    },
  });
  return (
    <div>
      <MySlider>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </MySlider>
    </div>
  );
};

export default Review;
