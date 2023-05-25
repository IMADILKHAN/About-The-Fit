import React, {useState,useEffect} from 'react';
import { Link,Redirect } from "react-router-dom";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping}  from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/"
import {loadCart} from "./helper/cartHelper"
import CartCard from "./CartCard"

import NavBar from "./NavBar"



export default function Cart(){
    let [products,setProducts] = useState([]);
    let [reload,setReload] = useState(false);

    useEffect(()=>{
        setProducts(loadCart())
        console.log({products});
    },[reload])

    const loadAllProducts = (products)=>{
        return (
            <div>
                {products.map((product,index)=>(
                    <
                    CartCard
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    reload = {reload}
                    setReload = {setReload}
                    />
                ))}
            </div>
        )
    }

    const loadCheckout = ()=>{
        return (
            <div>
                <h1>Checkout</h1>
            </div>
        )
    }


    return (
        <>
            <NavBar/>

            <div className="row text-center">
            <div className="col-6">
                {loadAllProducts(products)}
            </div>
            <div className="col-6">
                {loadCheckout()}
            </div>

            </div>


        </>
    )
}
