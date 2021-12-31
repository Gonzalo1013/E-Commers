import React, { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "./jeweleryStyle.scss"

const Jewelery = () => {
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

            const objetoFiltrado = electronic.filter(respuesta => respuesta.category === "jewelery")
            // console.log(objetoFiltrado);
    return (
        <div className="contentFilterElectronics">
            {objetoFiltrado.map((meme, index) => {
                return <article className="list" key={index}>
                        <img src={meme.image} alt="" />
                            <div className="detail">
                                <div className="contentTitle">
                                    <h4>{meme.title}</h4>
                                </div>
                                <b>${meme.price}</b>
                                <Link className="button" to={`/producto/${meme.id}`}>Ver Detalle</Link>
                            </div>
                        </article>
                })}
        </div>

    )
}

export default Jewelery