import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <footer className="footer footer-center p-10 text-base-content rounded">
        <nav className="md:grid md:grid-flow-col gap-4 ">
          <a className="link link-hover text-xl md:text-3xl font-medium text-white">
            Home
          </a>
          <a className="link link-hover text-xl md:text-3xl font-medium text-white">
            Contact Us
          </a>
          <a className="link link-hover text-xl md:text-3xl font-medium text-white">
          Services
          </a>
          <a className="link link-hover text-xl md:text-3xl font-medium text-white">
          Social Galary
          </a>
        </nav>
        <img
          src="https://i.ibb.co/2hJ4c8X/Feista-removebg-preview.png"
          alt=""
          className="w-[200px] rounded-lg"
        />
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl md:text-3xl text-white">
            <BsInstagram />
            <BsTwitter />
            <FaFacebookF />
            <FaGoogle />
            <FaGithub />
          </div>
        </nav>
        <aside>
          <p className="text-white">
            Copyright © 10-082023 - All right reserved by MBSL Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
