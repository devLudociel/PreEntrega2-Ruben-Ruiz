import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category"
import ItemDetails from "../pages/ItemDetails"
import ErrorNotFound from "../pages/ErrorNotFound";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        errorElement: <ErrorNotFound/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path:"/detail/:id",
                element:<ItemDetails/>,
            },
            {
                path:"/category/:categoryId",
                element: <Category/>,
            }
        ]
    }
])