
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import slider_1 from '../../../assets/img/Baby_1 .jpg'
import slider_2 from '../../../assets/img/Engagement .jpg'
import slider_3 from '../../../assets/img/Parties.jpg'
import slider_4 from '../../../assets/img/Weddings_4.jpg'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
          className="mySwiper h-[70vh]"
        >
          <SwiperSlide><img src={slider_1} alt="" className='h-full w-full'/></SwiperSlide>
          <SwiperSlide><img src={slider_2} alt="" className='h-full w-full'/></SwiperSlide>
          <SwiperSlide><img src={slider_3} alt="" className='h-full w-full'/></SwiperSlide>
          <SwiperSlide><img src={slider_4} alt="" className='h-full w-full'/></SwiperSlide>
        </Swiper>
      </>
    );
  };

export default Banner;