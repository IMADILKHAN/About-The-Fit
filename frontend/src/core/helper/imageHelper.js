import React from "react";

export default function ImageHelper({product}){
    const imageurl = product ? product.image
    : `https://images.unsplash.com/photo-1666291631431-85cd843669ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80`
    return (
        <div className="product-image">
            <img src={imageurl} width={250} height={250} className="product-image"/>
        </div>
    )
}
