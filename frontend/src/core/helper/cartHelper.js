export const addItemToCart = (item,next) =>{
    let cart = []
    if (typeof window !== undefined){
        if (localStorage.getItem("cart")){
            cart = Json.parse(localStorage.getItem("cart"))
        }
    }
}
