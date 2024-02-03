import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PRouterNews from "./PRouterNews";



const route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader:()=> fetch('/public/news.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path: "/news/:id",
                element: <PRouterNews><NewsDetails></NewsDetails></PRouterNews>
            }
            
            
        ]

    }
])

export default route;