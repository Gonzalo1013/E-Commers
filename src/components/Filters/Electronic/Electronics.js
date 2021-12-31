import React, { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "./electronicsStyle.scss"

const Electronics = () => {
    const [electronic, setElectronic] = useState([])

    useEffect(()=>{
        const amountData = fetch("https:/fakestoreapi.com/products")
            amountData
                .then((res) => res.json())
                .then((res) => {
                    setElectronic(res)
                    // console.log(res);
                })
                .catch(()=>{
                    console.log("Algo anda mal");
                })
            },[]);

            const objetElectronicFilter = electronic.filter(product => product.category === "electronics")
            // console.log(objetoFiltrado);
    return (
        <div className="contentFilterElectronics">
            {objetElectronicFilter.map((filteredProduct, index) => {
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

export default Electronics