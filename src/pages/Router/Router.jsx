import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Home/Home"
import SocialDetails from "../SocialDetails/SocialDetails"
import Registor from "../Authentication/Registor/Registor"
import Login from "../Authentication/Login/Login"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/details/:id',
                element: <SocialDetails/>,
                loader: ()=> fetch('/social.json')
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
