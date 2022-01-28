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

    const openFulImg = () => {
        const fulImgBox = document.getElementById("fulImgBox")
        fulImgBox.style.display = "flex"
    }
    const closeImg = () => {
        const fulImgBox = document.getElementById("fulImgBox")
        fulImgBox.style.display = "none"
    }

    return(
        <div className="containerContainer" >
        <article className="detailContainer" key={detail.id}>

                <div onClick={openFulImg} className="contentImgs">
                    <img onClick={openFulImg} src={detail.image} alt="" className="img" />
                </div>

                <div className="content_img" id="fulImgBox">
                    <img src={detail.image} alt="" className="image" id="fulImg" />
                    <span onClick={closeImg}>X</span>                    
                </div>

                <hr />
                <div className="detail">
                    <div className="welcome">
                        <h1>Bienvenido Coder</h1>
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