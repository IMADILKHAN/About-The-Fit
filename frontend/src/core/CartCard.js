import React from "react";
import ImageHelper from './helper/imageHelper'
import {API} from "../backend"
import { Link } from "react-router-dom";
import {isAuthenticated} from "../auth/helper"
import {addItemToCart,removeItemFromCart} from "./helper/cartHelper"
import {AiOutlineDelete,AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"

const addtoCart = ()=>{
    if (isAuthenticated()) {
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


export default function CartCard({
    product,
    addtoCart=true,
    removeFromCart=false,
    reload = undefined,
    setReload = f=>f,

}){


    return(
        <div>
            {/*Link for the product*/}
            <div className="product-container">
                <div className="product">
                <img src={product.image} className="cart-product-image"/>
                <div className="item-desc">
                        <p>{product.name}</p>
                        <h5>{product.price}</h5>
                        <div className="quantity-desc">
                            <span className="minus" onClick=" "><AiOutlineMinus/></span>
                            <span className="num" onClick=" ">1</span>
                            <span className="plus" onClick=" "><AiOutlinePlus/></span>
                        </div>


                        <button onClick={()=>{
                            removeItemFromCart(product.id)
                            setReload(!reload)
                        }} className="remove-item"><AiOutlineDelete/></button>
                </div>

                </div>
            </div>

        </div>
    )
}
