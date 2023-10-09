import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider_1 from "../../../assets/img/Baby_1 .jpg";
import slider_2 from "../../../assets/img/Engagement .jpg";
import slider_3 from "../../../assets/img/Parties.jpg";
import slider_4 from "../../../assets/img/Weddings_4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[70vh] w-full"
      >
        <SwiperSlide>
          <LazyLoadImage alt="" src={slider_1} className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src={slider_2} className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src={slider_3} className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src={slider_4} className="h-full w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
