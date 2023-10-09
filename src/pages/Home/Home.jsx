import ContactUs from "../../companent/ContactUs/ContactUs";
import OurTimes from "../../companent/OurTimes/OurTimes";
import SocailInfo from "../../companent/SocailInfo/SocailInfo";
import SocialCart from "../../companent/SocialCarts/SocialCarts";
import Banner from "../../companent/sherd/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SocialCart/>
            <SocailInfo/>
             <OurTimes/>
            <ContactUs/>

        </div>
    );
};

export default Home;