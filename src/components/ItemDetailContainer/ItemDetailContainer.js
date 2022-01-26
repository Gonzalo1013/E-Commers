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
                setDetail({...resultado.data(), id: resultado.id})
            })
    },[id])
    
    return ( 
        <>
            <ItemDetail detail={detail}/>
        </>
    )
}

export default ItemDetailtContainer
