import React, { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "./jeweleryStyle.scss"

const Jewelery = () => {
    const [jewelery, setJewelery] = useState([])

    useEffect(()=>{
        const amountData = fetch("https:/fakestoreapi.com/products")
            amountData
                .then((res) => res.json())
                .then((res) => {
                    setJewelery(res)
                    // console.log(res);
                })
                .catch(()=>{
                    console.log("Algo anda mal");
                })
            },[]);

            const objetJeweleryFilter = jewelery.filter(product => product.category === "jewelery")
            // console.log(objetoFiltrado);
    return (
        <div className="contentFilterElectronics">
            {objetJeweleryFilter.map((filteredProduct, index) => {
                return <article className="list" key={index}>
                        <img src={filteredProduct.image} alt="" />
                            <div className="detail">
                                <div className="contentTitle">
                                    <h4>{filteredProduct.title}</h4>
                                </div>
                                <b>${filteredProduct.price}</b>
                                <Link className="button" to={`/producto/${filteredProduct.id}`}>Ver Detalle</Link>
                            </div>
                        </article>
                })}
        </div>

    )
}

export default Jewelery