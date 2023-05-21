import React,{useState,useEffect} from 'react'
import {getProduct} from "./helper/coreapicalls"
import { useParams } from 'react-router';
import {AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar} from 'react-icons/ai';


export default function ProductDetails(productId){
    const { id } = useParams();
    const [product,setProduct] = useState([]);
    const loadAllProducts =() => {
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
        loadAllProducts();
    },[])
    let arr={product}
    console.log("-------");
    console.log(arr.product.name);
    console.log("-------");
    return(
        <>

            <div className="product-detail-container">
                <div className="image-container">
                <img  width={550} height={550}  src={arr.product.image}/>
                </div>

                <div className="product-details-description">
                    <h1>{arr.product.name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <p>20</p>
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

        </>
    )
}
