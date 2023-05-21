import React,{useState,useEffect} from 'react'
import Base from "./Base"
import Card from "./Card"
import ProductDetails from "./ProductDetails"
import {getProducts} from "./helper/coreapicalls"

export default function Home(){
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(false);

    const loadAllProducts =() => {
        getProducts()
        .then((data)=>{
            if (data.error) {
                setError(data.error)
                console.log(data.error);
            }
            else{
                setProducts(data)
            }
        })
    }
    useEffect(()=>{
        loadAllProducts();
    },[])
    return(
        <>
        <Hero/>


            <div className="products-heading">
            <h3>Best Sellers</h3>
            <p>find variant of products</p>

            {/* This is to loop over product*/}
            <div className="products-container">
                {products.map((product,index)=>{
                    return(
                        <div key={index}>
                            <Card product={product}/>
                        </div>
                    )
                })}
            </div>
            </div>
            footer
        </>
    )
}











function Hero(){
    return (
        <div className="hero-banner-container">
        <div className="hero-banner">
            <div>
                <p className="beats-solo">Hero Text</p>
                <h3>Mid Text</h3>
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" className="hero-banner-image" style={{width:"100%"}} />

            </div>
        </div>
        </div>
    )
}
