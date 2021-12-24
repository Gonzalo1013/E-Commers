import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailtContainer = () => {

    const [detail, setDetail] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        const getData = async () =>{
            const orderApi = await fetch(`https:/fakestoreapi.com/products/${id}`)
            const order = await orderApi.json()
            setDetail(order)
        }
        getData()
    },[id])
    
    return ( 
        <>
            <ItemDetail detail={detail}/>
        </>
    )
}

export default ItemDetailtContainer
