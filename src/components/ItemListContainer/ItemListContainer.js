import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import PuffLoader from "react-spinners/PuffLoader";
import "./spinner.scss"


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] =useState([])

    

    useEffect(()=>{
        const amountData = fetch("https:/fakestoreapi.com/products")
        amountData 
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
            <div className="spinner">
                <PuffLoader  loading={loading} size={150} color={"rgb(59, 133, 249)"} />
            </div>
        )
    }
    return (
        <>
            <ItemList amount={product}/>
        </>
    )
}

export default ItemListContainer