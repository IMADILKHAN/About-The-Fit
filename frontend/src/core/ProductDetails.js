import React,{useState,useEffect} from 'react'
import {getProduct,getProducts} from "./helper/coreapicalls"
import { useParams } from 'react-router';
import { Link,Redirect } from "react-router-dom";
import {AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar} from 'react-icons/ai';
import Card from "./Card"



export default function ProductDetails(productId){
    const { id } = useParams();
    const [product,setProduct] = useState([]);
    const loadAllProduct =() => {
        getProduct({id})
        .then((data)=>{
            if (data.error) {
                console.log(data.error);
                console.log(1234567);
            }
            else{
                setProduct(data)
            }
        })
    }


    useEffect(()=>{
        loadAllProduct();
    },[])
    let arr={product}
    const products = Prodcut();
    return(
        <>

            <div className="product-detail-container">
                <div className="image-container">
                <img  width={450} height={450}  src={arr.product.image}/>
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
                            <span className="num" onClick=" ">0</span>
                            <span className="plus" onClick=" "><AiOutlinePlus/></span>
                        </p>
                    </div>

                    <div className="buttons">
                        <button className="add-to-cart" onClick>Add To Cart</button>
                        <button className="buy-now" onClick>Buy Now</button>
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
                            console.log(url);
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
    console.log(products);
    return products
}
