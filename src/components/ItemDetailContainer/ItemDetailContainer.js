import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {db} from "../Firebase/Firebase"
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailtContainer = () => {

    const [detail, setDetail] = useState([])

    const {id} = useParams()

    useEffect(()=>{
    
        const collection_of_products = collection(db , "products")
        const refDoc = doc(collection_of_products, id)
        getDoc(refDoc)
            .then((resultado)=>{
                // console.log(resultado.id);
                // console.log(resultado.data());
                setDetail({...resultado.data(), id: resultado.id})
            })


        // const getData = async () =>{
        //     const orderApi = await fetch(`https:/fakestoreapi.com/products/${id}`)
        //     const order = await orderApi.json()
        //     setDetail(order)
        // }
        // getData()
    },[id])
    
    return ( 
        <>
            <ItemDetail detail={detail}/>
        </>
    )
}

export default ItemDetailtContainer
