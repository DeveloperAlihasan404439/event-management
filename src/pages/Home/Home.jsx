import ContactUs from "../../companent/ContactUs/ContactUs";
import Featcher from "../../companent/Featcher/Featcher";
import OurTimes from "../../companent/OurTimes/OurTimes";
import SocailInfo from "../../companent/SocailInfo/SocailInfo";
import SocialCart from "../../companent/SocialCarts/SocialCarts";
import TeamSection from "../../companent/TeamSection/TeamSection";
import Banner from "../../companent/sherd/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SocialCart/>
            <Featcher/>
            <SocailInfo/>
            <TeamSection/>
             <OurTimes/>
            <ContactUs/>

        </div>
    );
};

export default Home;