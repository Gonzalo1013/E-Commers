import React, { useState } from "react"
import {NavLink} from "react-router-dom"

import "./ItemCount.scss"


const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const sum = ()=>{
        setContador(contador + 1)
        if(contador === stock){
            setContador(contador)
        }
    }
    const  subtraction = () => {
        if(contador > 0)
        setContador(contador -1)
    }
    
    const addCart = () =>{
        if(contador !== 0){
            onAdd(contador)
            setContador(initial)
            console.log("Se agrego el producto al carrito");
        }
    }
    return(
        <div className="itemCountContainer">
            <p>Cantidad: {stock}</p>
            <div className="cont">
                <p onClick={subtraction} className="resta">-</p>
                <p className="contador">{contador}</p>
                <p onClick={sum} className="suma">+</p>
            </div>
            <button to="/Cart" onClick={addCart} className="addCart">Agregar al Carrito</button>
            <NavLink to="/Cart" className="linkComprar">Comprar</NavLink>
        </div>
    )
}

export default ItemCount