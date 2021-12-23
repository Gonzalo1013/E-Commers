import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailtContainer = () => {

    const [detail, setDetail] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        const obtenerDatos = async () =>{
            const pedidoApi = await fetch(`https:/fakestoreapi.com/products/${id}`)
            const pedido = await pedidoApi.json()
            setDetail(pedido)
        }
        obtenerDatos()
    },[id])
    
    return ( 
        <>
            <ItemDetail detail={detail}/>
        </>
    )
}

export default ItemDetailtContainer
