
import { Outlet } from "react-router-dom";
import Navber from "../../companent/sherd/Navber/Navber";
import Footer from "../../companent/sherd/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#0E1528] w-full">
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;