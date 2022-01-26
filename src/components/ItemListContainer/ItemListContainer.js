import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import PuffLoader from "react-spinners/PuffLoader";
import "./spinner.scss"
import { db } from "../Firebase/Firebase"
import { getDocs , query , collection, where } from "firebase/firestore";


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] =useState([])

    const {name} = useParams()
    
    useEffect(()=>{

        const collection_of_products = collection(db , "products")

        if(name){
            const consulta = query(collection_of_products, where("category", "==", name))
        getDocs(consulta)
        .then(({docs})=>{
                setProduct(docs.map((doc)=>({ id : doc.id , ...doc.data()})))
                setLoading(false)
            })
        }else{
            getDocs(collection_of_products)
            .then((res)=>{
                const docs = res.docs
                const list = docs.map((doc)=>{
                    const id = doc.id
                    const data = doc.data()
                    const produc = {
                        id: id,
                        ...data                         
                    }
                    return produc
                })
                setLoading(false)
                setProduct(list);
            })
        }
    },[name])

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