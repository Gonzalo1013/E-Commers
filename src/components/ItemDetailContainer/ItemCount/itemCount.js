import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./ItemCount.scss"
const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)

    const sum = ()=>{
        if(count < stock){
            setCount(count + 1)
        }else {
            setCount(count)
        }
    }
    const  subtraction = () => {
        if(count > 0)
        setCount(count -1)
    }
    
    const addCart = () =>{
        if(count > 0){
            onAdd(count)
            setCount(initial)

            let parent = document.getElementsByClassName("itemCountContainer")[0];
            let child = parent.getElementsByTagName("button")[0];
            let childCount = parent.getElementsByClassName("cont")[0];
                parent.removeChild(child);
                parent.removeChild(childCount)

            let call_buttons = document.getElementById("call_button") 
            let call_button = document.getElementById("call_button_buy") 
                call_buttons.style.display = "flex"
                call_button.style.display = "flex"
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
            <button onClick={addCart} className="addCart">Agregar al Carrito</button>
            <button className="button_link" id="call_button">
                <Link to="/Cart" className="link_addCart">Ir al Carrito</Link>
            </button>
            <button className="button_link" id="call_button_buy">
                <Link to="/" className="link_addCart">Seguir Comprando</Link>
            </button>
        </div>
    )
}

export default ItemCount