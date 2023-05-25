import React, {useRef} from 'react';
import { Link,Redirect } from "react-router-dom";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping}  from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/"
import NavBar from "./NavBar"



export default function Cart(){


    return (
        <>
            <NavBar/>
            <div>CART</div>
        </>
    )
}
