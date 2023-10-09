import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { setLocalStorage } from "../utilites/LocalStorage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SocialDetails = () => {
  const [detail, setDetail] = useState({});
  const [listImages, setListImages] = useState('')
  const socail = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const details = socail?.find((socail) => socail.id === id);
    setDetail(details);
  }, [id]);
  const { thumbnail, title, description, price, list, images } = detail;
  // local storages added the services 
  const hendelLocalStorage = id =>{
    setLocalStorage(id)
  }
  return (
    <div className="pt-20 pb-10 text-white lg:flex gap-5 items-center w-11/12 mx-auto lg:h-[100vh]">
      <div className="w-full lg:w-[60%]">
        <LazyLoadImage src={listImages?listImages:thumbnail} alt="" className="w-[100%] h-[60vh] rounded-2xl" />
        <div className="flex  gap-3 items-center justify-center py-3 my-2 bg-[#05070e91]">
          {images?.map((image, i) => (
            <div onClick={()=>setListImages(image.img_list)} key={i} className="border-2 border-[#05070e91] rounded-lg">
              <LazyLoadImage src={image.img_list} alt="" className="w-[130px] h-[100px] rounded-lg"/>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[40%] text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl font-medium text-white pb-3">
          Tatel : {title}
        </h1>
        <h1 className="text-xl md:text-2xl font-mono text-white">
          {description}
        </h1>
        <p className="text-xl py-3 text-orange-400">Prices : {price}</p>
        <div className="pb-5">
          {list?.map((item, i) => (
            <div key={i} className="flex gap-3 items-center pb-1 ">
              <div className="bg-orange-500 p-2 rounded-[50%]">
                <FaCheck />
              </div>
              <p className="text-xl font-medium">{item.event_name}</p>
            </div>
          ))}
        </div>
        <div className="md:flex gap-4">
        <button onClick={()=>hendelLocalStorage(detail.id)} className="w-full mb-4 md:mb-4 text-black py-2 bg-gradient-to-l from-orange-500 to-orange-300 rounded-lg text-xl font-medium shadow-lg">
          Add The Services
        </button>
        <Link to='/' className="w-full text-center text-black py-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg text-xl font-medium shadow-lg">
        <button className="w-full ">
          Go To Home Pages
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialDetails;
