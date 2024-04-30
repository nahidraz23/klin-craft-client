import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import AllArtCraft from "../pages/AllArtCraft";
import MyArtCraft from "../pages/MyArtCraft";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddItem from "../pages/AddItem";
import CraftItemsDetails from "../pages/CraftItemsDetails";
import SubCategoryDetails from "../pages/SubCategoryDetails";
import UpdatePage from "../pages/UpdatePage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://kiln-craft-server-cc88w3ni0-nahid-razs-projects.vercel.app/items')
            },
            {
                path: '/allartcraft',
                element: <AllArtCraft></AllArtCraft>,
                loader: () => fetch('http://localhost:5300/items')
            },
            {
                path: '/myartcraft',
                element:
                    <PrivateRoutes>
                        <MyArtCraft></MyArtCraft>
                    </PrivateRoutes>,
            },
            {
                path: '/additem',
                element: 
                <PrivateRoutes>
                    <AddItem></AddItem>
                </PrivateRoutes>

            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/craftitemsdetails/:id',
                element:
                    <PrivateRoutes>
                        <CraftItemsDetails></CraftItemsDetails>
                    </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5300/items/${params.id}`)
            },
            {
                path: '/subcategorydetails/:subcategory_Name',
                element: <SubCategoryDetails></SubCategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5300/subcategorydetails/${params.subcategory_Name}`)
            },
            {
                path: `/updatepage/:id`,
                element: <UpdatePage></UpdatePage>,
                loader: ({ params }) => fetch(`http://localhost:5300/items/${params.id}`)
            }

        ]

    }
])