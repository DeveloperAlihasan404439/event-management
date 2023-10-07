
import { Outlet } from "react-router-dom";
import Navber from "../../companent/sherd/Navber/Navber";

const MainLayout = () => {
    return (
        <div className="bg-[#0E1528]">
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;