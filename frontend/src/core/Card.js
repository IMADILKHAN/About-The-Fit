import React from "react";
import ImageHelper from './helper/imageHelper'
import {API} from "../backend"
import { Link,Redirect } from "react-router-dom";

let isAuthenticated = true;


const addtoCart = ()=>{
    if (isAuthenticated) {
        console.log("Added to cart");
    }
    else {
        console.log("login first");
    }
}
//
// const getAredirect = (redirect) =>{
//     if (redirect){
//         return <Redirect to="/cart">
//     }
// }


export default function Card({
    product,
    addtoCart=true,
    removeFromCart=false
}){

    let url = 'product/'+product.id
    console.log(url);
    return(
        <div>
            {/*Link for the product*/}

            <Link to={`${url}`}>
            <div className="product-card">
                <img src={product.image} width={250} height={250} className="product-image"/>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
            </div>
            </Link>

        </div>
    )
}
