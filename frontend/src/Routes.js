import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./core/Home"
import ProductDetails from "./core/ProductDetails"
import privateRoutes from "./auth/helper/PrivateRoutes";
export default function Routees(){
    return(

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
        </BrowserRouter>

    )
}
