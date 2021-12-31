import React, { useState } from "react"
import {NavLink} from "react-router-dom"

import "./ItemCount.scss"


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sum = ()=>{
        setCount(count + 1)
        if(count === stock){
            setCount(count)
        }
    }
    const  subtraction = () => {
        if(count > 0)
        setCount(count -1)
    }
    
    const addCart = () =>{
        if(count !== 0){
            onAdd(count)
            setCount(initial)
            console.log("Se agrego el producto al carrito");
            let parent = document.getElementsByClassName("itemCountContainer")[0];
            let child = parent.getElementsByTagName("button")[0];
            let childCount = parent.getElementsByClassName("cont")[0];
                parent.removeChild(child);
                parent.removeChild(childCount)
        }
    }
    return(
        <div className="itemCountContainer">
            <p>Cantidad: {stock}</p>
            <div className="cont">
                <p onClick={subtraction} className="subtraction">-</p>
                <p className="count">{count}</p>
                <p onClick={sum} className="sum">+</p>
            </div>
            <button to="/Cart" onClick={addCart} className="addCart">Agregar al Carrito</button>
            <NavLink to="/Cart" className="linkBuy">Terminar Compra</NavLink>
        </div>
    )
}

export default ItemCount