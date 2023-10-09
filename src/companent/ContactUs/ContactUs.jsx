import { BiUser, BiSolidPhoneOutgoing } from "react-icons/bi";
import { AiTwotoneHome, AiOutlineMail } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ContactUs = () => {
  const containerStyle = {
    backgroundImage: "url('https://i.ibb.co/FDVQ13t/contact.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    hight: "100%",
  };
  return (
    <div className="w-11/12 mx-auto pt-14">
      <div
        className="w-11/12 mx-auto border-2  rounded-lg bg-scroll"
        style={containerStyle}
      >
        <div className="bg-[#1e19197c]">
          <div data-aos="zoom-in-down" data-aos-duration="2000">
            <div className="md:w-[60%] mx-auto text-center p-5">
              <h1 className="text-3xl font-medium text-orange-500">
                Connect with I genuinely and purposefully. I value your
                interactions and look forward to hearing from you.
              </h1>
              <p className="text-lg font-light text-white py-2">
                Our Contact Us page is your gateway to getting in touch with us.
                We value your feedback, inquiries, and suggestions. Whether you
                have questions about our products, need assistance with an
                order, or simply want to connect with our team, we are here to
                assist you. Please feel free to reach out using the provided
                contact form, email address, or phone number. We strive to
                respond promptly to all your messages and ensure that your
                concerns are addressed effectively. Your input is invaluable in
                helping us improve our services and meet your needs. We look
                forward to hearing from you and providing the assistance you
                require.
              </p>
            </div>
          </div>
          <div className="w-[90%] mx-auto pb-5">
            <div className="border-2 border-[#1e19197c] rounded-xl shadow-xl p-5 w-full flex justify-between items-center">
              <div data-aos="fade-right" data-aos-offset="300">
                <div className="flex gap-4 mb-3 text-2xl items-center">
                  <div className="p-2 bg-black  rounded-[50%]">
                    <BiUser className="text-orange-500 text-5xl" />
                  </div>
                  <h1 className="text-white">Developer Ali Hasen</h1>
                </div>
                <div className="flex gap-4 mb-3 text-2xl items-center ">
                  <div className="p-2 bg-black  rounded-[50%]">
                    <AiTwotoneHome className="text-orange-500 text-5xl" />
                  </div>
                  <h1 className="text-white">Nilphamari, Rangpur, Dhaka</h1>
                </div>
                <div className="flex gap-4 mb-3 text-2xl items-center ">
                  <div className="p-2 bg-black  rounded-[50%]">
                    <BiSolidPhoneOutgoing className="text-orange-500 text-5xl" />
                  </div>
                  <h1 className="text-white">+8801783-228430</h1>
                </div>
                <div className="flex gap-4 mb-3 text-2xl items-center ">
                  <div className="p-2 bg-black  rounded-[50%]">
                    <AiOutlineMail className="text-orange-500 text-5xl" />
                  </div>
                  <h1 className="text-white">developeralihasan777@gmail.com</h1>
                </div>
              </div>
              <div className="md:w-[50%]">
                <div data-aos="fade-left" data-aos-offset="300">
                  <form>
                    <h1 className="text-5xl font-medium text-white text-center">
                      Your Information
                    </h1>
                    <input
                      className="w-full text-2xl p-3 bg-transparent border-b-2 border-black text-white outline-none focus:outline-none"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <input
                      className="w-full text-2xl p-3 bg-transparent border-b-2 border-black text-white outline-none focus:outline-none"
                      type="Email"
                      name="email"
                      placeholder="Email"
                    />
                    <textarea
                      name="message"
                      id=""
                      cols="10"
                      rows="5"
                      placeholder="Enter your message"
                      className="w-full text-2xl p-3 bg-transparent border-b-2 border-black text-white outline-none focus:outline-none"
                    ></textarea>
                    <button className="w-full py-3 bg-orange-400 hover:bg-orange-600 text-white text-2xl rounded-3xl mt-3">
                      Submit Contact
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
