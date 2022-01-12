import { useMyContext } from "../Context/myContext" 
import { Link } from "react-router-dom"
import "./cart_style.scss"
const Cart = () => {

    const {myCart, totalQuantity, resetCart, delateToCart, oneQuantity} = useMyContext()

    // const resultado = useMyContext()
    // console.log(resultado);

//     const gonza = [
//         {id:1, nombre:"gonzalo", edad: 31},
//         {id:1, nombre:"gonzalo", edad: 31},
//         {id:1, nombre:"gonzalo", edad: 31},
//         {id:1, nombre:"gonzalo", edad: 31},
// ]

    return(
        <div className="contentCart">
            
            {myCart.length > 0 ? (
                <ul className="ulCart">
                    {myCart.map((product, id)=>{
                        // console.log(product);
                        return <>
                            <li className="liCart" key={id}>
                                <div>
                                    <img src={product.image} alt="" />
                                    <h5>{product.title}</h5>
                                </div>
                                <div>
                                    <b>${product.price}</b>
                                    <p>X{oneQuantity}</p>
                                    {console.log(oneQuantity)}
                                    <button className="button_delateToCart" onClick={delateToCart}><img src="/logo_Eliminar.png" alt="delete_log" /></button>
                                </div>
                            </li>
                        </>
                        })}
                </ul>
            ) : <p className="p_carrito_vacio"> No hay productos en el carrito!!!</p>}

            {myCart.length > 0 ? 
                <div className="content_link_button_totalQuantity">
                    <div className="content_button_totalQuantity">
                            <p>Cantidad Total de productos: {totalQuantity}</p>
                            <button className="button_reset" onClick={resetCart}>Limpiar el Carrito</button>
                    </div>
                        <Link className="link_button_Comprar" to="/productos">Comprar</Link>
                </div> : <p></p>}
        </div>
        
    )
}

export default Cart