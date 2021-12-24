import React, { useState } from "react"
import "./itemDetail.scss"
import ItemCount from "./ItemCount/itemCount"


const ItemDetail = ({detail}) => {

    let [amount, setAmount] = useState(0)

    const onAdd = (amountItems) => {
        setAmount(amountItems)
    }

    return(
        <div className="containerContainer">
        <article className="detailContainer" key={detail.id}>
                <img src={detail.image} alt="" className="image" />
                <hr />
                <div className="detail">
                    <div className="welcome">
                        <h1>Bienvenido Corder</h1>
                        <p>Estas a solo un paso de tu compra!!</p>
                    </div>
                    <div className="title">
                        <h4>{detail.title}</h4>
                        <p>$ {detail.price}</p>
                    </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                <p>Seleccionaste {amount} {detail.title} </p>
                </div>
        </article>
        </div>
    )
}

export default ItemDetail