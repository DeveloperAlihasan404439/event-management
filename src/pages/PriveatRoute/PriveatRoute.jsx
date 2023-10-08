import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../CreateContext/CreateContext";

const PriveatRoute = ({children}) => {
    const location = useLocation()
    const {user,loding} = useContext(AuthContext)
    if(loding){
        return <div className="text-center flex justify-center items-center pt-28 h-[100vh] ">
            <span className="loading loading-spinner loading-lg text-orange-500"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PriveatRoute;