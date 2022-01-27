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

            let buyButton = document.createElement("a")
            buyButton.textContent = "Ir al Carrito"
            buyButton.setAttribute("class","linkBuy")
            buyButton.setAttribute("href","/Cart")
            parent.appendChild(buyButton)
            
            let keepBuying = document.createElement("a")
            keepBuying.textContent = "Seguir Comprando"
            keepBuying.setAttribute("class","buying")
            keepBuying.setAttribute("href", "/productos")
                parent.appendChild(keepBuying)   
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
            <Link to="/Cart" className="gonza">Con este Link anda el carrito</Link>
        </div>
    )
}

export default ItemCount