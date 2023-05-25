import {API} "../../backend"

export const getmeToken = (userId,token)=>{
    return fetch(`${API}payment/gettoken`)
}
