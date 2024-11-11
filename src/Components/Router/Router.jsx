import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Order from "../Orderlist/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Profile/Profile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/order',
            element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
            path:'/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
      ]
    },
  ]);

export default router;