import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

const SocialDetails = () => {
  const [detail, setDetail] = useState({});
  const [listImages, setListImages] = useState('')
  const socail = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const details = socail?.find((socail) => socail.id === id);
    setDetail(details);
  }, [id]);
  // console.log(detail);
  const { thumbnail, title, description, price, list, images } = detail;
  console.log(list);
  return (
    <div className="pt-20 pb-10 text-white flex gap-5 items-center w-11/12 mx-auto h-[100vh]">
      <div className="md:w-[60%]">
        <img src={listImages?listImages:thumbnail} alt="" className="w-[100%] rounded-2xl" />
        <div className="flex  gap-3 items-center justify-center py-3 my-2 bg-[#05070e91]">
          {images?.map((image, i) => (
            <div onClick={()=>setListImages(image.img_list)} key={i} className="border-2 border-[#05070e91] rounded-lg">
              <img src={image.img_list} alt="" className="w-[130px] rounded-lg"/>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[40%]">
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
        <button className="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg text-xl font-medium shadow-lg">
          Go To Home Pages
        </button>
      </div>
    </div>
  );
};

export default SocialDetails;
