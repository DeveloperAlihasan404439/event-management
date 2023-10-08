import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./OurTimes.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const OurTimes = () => {
  const [user, setUser] = useState([]);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

    fetch("/ouerTimes.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  return (
    <div className="py-10 ">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-medium text-center pb-5 text-orange-500">
        Our Exclusive User Team
      </h1>
      <div className="lg:w-[50%] lg:h-[500px] flex justify-center items-center mx-auto">
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper z-20 h-40 rounded-[20px]"
        >
          {user?.map((times) => (
            <SwiperSlide key={times.id} className="relative">
              <img src={times.user_images} alt="" className="w-full h-full" />
              <div className="absolute bottom-0 left-0  h-full w-full flex justify-center items-end ">
                <div className="bg-[#1e1919a8] w-full pb-8">
                  <h1 className="text-center text-2xl pt-5 font-medium text-white">
                    Name :{times.name}
                  </h1>
                  <p className="text-white">Job : {times.jobTitle}</p>
                  <p className="text-white">
                    Company Name : {times.companyName}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurTimes;
