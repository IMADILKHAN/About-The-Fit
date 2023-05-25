import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./core/Home"
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import UserDashboard from "./user/UserDashboard"
import ProductDetails from "./core/ProductDetails"
import PrivateRoutes from "./auth/helper/PrivateRoutes";
export default function Routees(){
    return(

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
        </BrowserRouter>

    )
}
