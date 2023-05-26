import React,{useState,useEffect} from 'react'
import {getProduct,getProducts} from "./helper/coreapicalls"
import {addItemToCart,removeItemFromCart} from "./helper/cartHelper"
import { useParams } from 'react-router';
import { Link,Redirect } from "react-router-dom";
import {AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {isAuthenticated} from "../auth/helper"

import SizeSelector from './SizeSelector';
import Card from "./Card"
import NavBar from "./NavBar"







export default function ProductDetails(productId){
    const { id } = useParams();
    const [product,setProduct] = useState([]);
    const [imgSrc,setImgSrc] = useState();
    let arr={product}
    const products = Prodcut();
    console.log("==============");
    const images = arr.product.images;
    const loadAllProduct =() => {
        getProduct({id})
        .then((data)=>{
            if (data.error) {
                console.log(data.error);
            }
            else{
                setProduct(data)
            }
        })
    }
    let first_url = arr.product.image


    useEffect(()=>{
        loadAllProduct();
        setImgSrc(first_url)
    },[])
    useEffect(()=>{
    // setImgSrc(arr.product.image)
    })

    const addtoCart = ()=>{
        if (isAuthenticated()) {
            addItemToCart(product,()=>{})
            console.log("Added to cart");
        }
        else {
            console.log("login first");
        }
    }



    console.log("==============");
    return(
        <>
            <NavBar/>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                    <img  width={550} height={600}  src={imgSrc}/>
                    </div>
                    <div className="small-images-container">
                    {images?.map((item,i)=>(
                        <img src={item.image} className={item.image==imgSrc?'small-image selected-image':"small-image"} onMouseEnter={()=>setImgSrc(item.image)}/>
                    ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{arr.product.name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{arr.product.description}</p>
                    <p className="price">{product.price}</p>

                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick=" "><AiOutlineMinus/></span>
                            <span className="num" onClick=" ">1</span>
                            <span className="plus" onClick=" "><AiOutlinePlus/></span>
                        </p>
                    </div>

                    <SizeSelector />


                    <div className="buttons">
                        <button className="add-to-cart" onClick={addtoCart}>Add To Cart</button>
                        <button className="buy-now" onClick={()=>{removeItemFromCart(arr.product.id)}}>Buy Now</button>

                    </div>


                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                    <div className="products-container">
                        {products.map((product,index)=>{
                            let url = '/product/'+product.id

                            return(
                                <div key={index}>
                                    <Card product={product}/>

                                </div>
                            )
                        })}
                    </div>
                    </div>
                </div>

            </div>

        </>
    )
}






function Prodcut(){
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(false);

    const loadAllProducts =() => {
        getProducts()
        .then((data)=>{
            if (data.error) {
                setError(data.error)

            }
            else{
                setProducts(data)
            }
        })
    }
    useEffect(()=>{
        loadAllProducts();
    },[])

    return products
}
