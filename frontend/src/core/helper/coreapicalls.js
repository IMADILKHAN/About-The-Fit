import {API} from "../../backend"

export  function getProducts(){
    return fetch(`${API}product/`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}


export  function getProduct(id){
    let url = API+"product/"+id.id+'/'
    return fetch(`${url}`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch((err) => {console.log(err);})
}
