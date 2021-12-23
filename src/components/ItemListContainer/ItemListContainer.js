import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] =useState([])

    

    useEffect(()=>{
        const pedidoData = fetch("https:/fakestoreapi.com/products")
        pedidoData 
        .then((res)=>res.json())
        .then((res)=>{
                    setLoading(false)
                    setProduct(res)
                    // console.log(res)
                })
        .catch(()=>{
            console.log("Algo anda mal");
        })
    },[])

    if(loading){
        return(
            <div>Cargando...</div>
        )
    }
    return (
        <>
            <ItemList pedido={product}/>
        </>
    )
}

export default ItemListContainer