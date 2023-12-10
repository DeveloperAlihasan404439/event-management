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
          <LazyLoadImage alt="" src="https://images.unsplash.com/photo-1674574124345-02c525664b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnQlMjBtZW5hZ2VtZW50fGVufDB8fDB8fHww" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50JTIwbWVuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGV2ZW50JTIwbWVuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src="https://images.unsplash.com/photo-1501238295340-c810d3c156d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGV2ZW50JTIwbWVuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage alt="" src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGV2ZW50JTIwbWVuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" className="h-full w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
