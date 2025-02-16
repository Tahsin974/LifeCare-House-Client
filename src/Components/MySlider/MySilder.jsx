import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
const MySlider = ({ children, view = 2 }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          612: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          880: {
            slidesPerView: view,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: view,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default MySlider;
