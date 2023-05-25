import React from "react"
import { Link,Redirect } from "react-router-dom";
import {AiOutlineShoppingCart,AiOutlineUser,AiOutlineLogin,AiOutlineLogout} from "react-icons/ai";
import {signout} from "../auth/helper"


export default function NavBar(){
    return(
        <div>
        <nav class="navbar navbar-expand-sm  bg-dark">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
         <ul class="navbar-nav mr-1 mt-0 mt-lg-6">
                <Link reloadDocument to={`/`} >
                <li className="navbar-brand text-light">
                    About The Fit
                </li>
                </Link>
                
                <Link reloadDocument to={`/signin`} >
                <li  onClick={()=>{
                        signout();
                }}
                className="text-light navbar-brand">
                    <AiOutlineLogin/>
                </li>
                </Link>
                <Link reloadDocument to={`/cart`} >
                <li className="text-light navbar-brand">
                    <AiOutlineShoppingCart/>
                </li>
                </Link>
                <Link reloadDocument to={`/user/dashboard`} >
                <li className="text-light navbar-brand">
                        <AiOutlineUser/>
                </li>
                </Link>
                <Link reloadDocument to={`/user/dashboard`} >
                <li className="text-light navbar-brand">
                        <AiOutlineLogout/>

                </li>
                </Link>
                </ul>
                </div>
            </nav>
        </div>
    )
}
