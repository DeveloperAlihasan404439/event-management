import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Home/Home"
import SocialDetails from "../SocialDetails/SocialDetails"
import Registor from "../Authentication/Registor/Registor"
import Login from "../Authentication/Login/Login"
import PriveatRoute from "../PriveatRoute/PriveatRoute"
import ServicesSocail from "../ServicesSocail/ServicesSocail"
import ContactUs from "../../companent/ContactUs/ContactUs"
import Galary from "../Galary/Galary"
import Error from "../Error/Error"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
             {
                path: '/details/:id',
                loader: ()=> fetch('/social.json'),
                element: <PriveatRoute><SocialDetails/></PriveatRoute>
            },
            {
                path: '/services',
                element: <PriveatRoute><ServicesSocail/></PriveatRoute>
            },
            {
                path: '/contact',
                element: <ContactUs/>,
            },
            {
                path: '/galari',
                element: <PriveatRoute><Galary/></PriveatRoute>,
            },
            {
                path: '/registor',
                element: <Registor/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
        ]
    }
])
