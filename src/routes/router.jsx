import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import AllArtCraft from "../pages/AllArtCraft";
import MyArtCraft from "../pages/MyArtCraft";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddItem from "../pages/AddItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5300/items')
            },
            {
                path:'/allartcraft',
                element: <AllArtCraft></AllArtCraft>,
                
            },
            {
                path:'/myartcraft',
                element: <MyArtCraft></MyArtCraft>
            },
            {
                path: '/additem',
                element: <AddItem></AddItem>

            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]
        
    }
])