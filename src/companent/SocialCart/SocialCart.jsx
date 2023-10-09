import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

AOS.init();
const SocialCart = ({ socialData }) => {
  const { id, thumbnail, title, description, price } = socialData;
  return (
    <div data-aos="flip-left" data-aos-duration="2000">
      <div
        className={`rounded-xl drop-shadow-shadow-3xl bg-[#05070e91] border-2 border-[#1721319f] relative text-white`}
      >
        {" "}
        <div>
          <LazyLoadImage
            alt=''
            src={thumbnail}
            className="rounded-t-xl w-full mb-4 md:h-[250px]" 
          />
        </div>
        {/* <LazyLoadImage>
          <img
            src={thumbnail}
            alt=""
            className="rounded-t-xl w-full mb-4 md:h-[250px]"
          />
        </LazyLoadImage> */}
        <div className="pl-5 pr-3 mb-14">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-lg py-3">{description}</p>
          <p className="text-lg">
            Price : <span className="text-orange-500">{price}</span>
          </p>
        </div>
        <Link to={`/details/${id}`}>
          <button className="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-b-lg text-xl font-medium absolute left-0 bottom-0">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SocialCart;
