import UserRoot from "../pages/UserRoot";
import AddProduct from "../pages/add-product";
import Detail from "../pages/detail";
import Home from "../pages/home";


export const ROUTES = [
    {
      path: "/",
      element: <UserRoot/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/add-product",
            element: <AddProduct/>
        },
        {
            path: "/products/:id",
            element: <Detail/>
        },
      ]
    },
  ];