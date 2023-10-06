
import { Outlet } from "react-router-dom";
import Navber from "../../companent/sherd/Navber/Navber";

const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;