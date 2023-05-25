import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./core/Home"
import Signup from "./user/Signup"

import ProductDetails from "./core/ProductDetails"
import privateRoutes from "./auth/helper/PrivateRoutes";
export default function Routees(){
    return(

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
        </BrowserRouter>

    )
}
