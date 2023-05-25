import React,{useState,useEffect} from "react";
import { Link,Redirect } from "react-router-dom";
import {cartEmpty} from "./helper/cartHelper";
import {getmeToken,processPayment} from "./helper/paymentHelper";
import {createOrder} from "./helper/orderHelper";
import {isAuthenticated} from "../auth/helper";

import DropIn from "braintree-web-drop-in-react"

const PaymentB=({
    products,
    reload=undefined,
    setReload = f=>f,
})=>{

    const  [info,setInfo] = useState({
        loading:false,
        success:false,
        clientToken:null,
        error:"",
        instance:{}
    })

    const userId = isAuthenticated() && isAuthenticated().user.id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId,token)=>{
        getmeToken(userId,token)
        .then(info=>{
            if (info.error) {
                setInfo({
                    ...info,
                    error:info.error,
                })
            }
            else {
                const clientToken = info.clientToken
                setInfo({clientToken})
            }
        })
    }

    useEffect(()=>{
        getToken(userId,token);
    },[]);

    const getAmount = ()=>{
        let amount = 0;
        products.map(p=>{
            amount = amount + parseInt(p.price)
        });
        console.log(amount);
        return amount;
    }

    const showbtnDropIn = ()=>{
        return(
            <div>
                {
                    info.clientToken !== null && products.length >0 ? (
                        <div>
                            <DropIn
                            options = {{authorization:info.clientToken}}
                            onInstance = {instance=>{
                                info.instance = instance
                            }}
                            >
                            <button className="btn btn-block btn-sucess"></button>
                            </DropIn>
                        </div>
                    ):
                    (
                        <h3>Cart Empty</h3>
                    )
                }
            </div>
        )
    }

    return (
        <div>
            <h3>Your bill is {getAmount()}</h3>
            {showbtnDropIn()}
        </div>
    )
}

export default PaymentB;
