import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <footer className="px-4 divide-y  md:mt-5">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            
          <h1 className="text-xl font-mono text-white uppercase tracking-[3px]">EventopiaPro</h1>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracki uppercase text-white">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracki uppercase text-white">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-white">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className=" text-white" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase  text-white">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center text-2xl text-white p-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center text-2xl text-white p-1"
                >
                  <BsTwitter />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center text-2xl text-white p-1"
                >
                  <BsInstagram />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center text-2xl text-white p-1"
                >
                  <FaGoogle />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-white ">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
