import React, { useState } from "react"
import "./itemDetail.scss"
import ItemCount from "./ItemCount/itemCount"
import { useMyContext } from "../Context/myContext"


const ItemDetail = ({detail}) => {
    
    const {addToCart} = useMyContext()

    let [amount, setAmount] = useState(0)

    const onAdd = (amountItems) => {
        setAmount(amountItems)
        addToCart(detail, amountItems)
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
                        <h4>{detail.name}</h4>
                        <h3>{detail.description}</h3>
                        <p>$ {detail.price}</p>
                    </div>
                <ItemCount stock={detail.quantity} initial={1} onAdd={onAdd}/>
                <p>Seleccionaste {amount} {detail.title} </p>
                </div>
        </article>
        </div>
    )
}

export default ItemDetail