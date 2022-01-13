import { useMyContext } from "../Context/myContext" 
import { Link } from "react-router-dom"
import "./cart_style.scss"
const Cart = () => {

    const {myCart, totalQuantity, resetCart, cleanToCart} = useMyContext()
    // const resultado = useMyContext()
    // console.log(resultado);

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
                                    <button >-</button>
                                    <p>X{product.quantity}</p>
                                    <button >+</button>
                                    <button className="button_delateToCart" onClick={()=>cleanToCart(product.id,product.quantity)}><img src="/logo_Eliminar.png" alt="delete_log" /></button>
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
                    <div className="link_button_finish">
                            <Link className="Link_terminar" to="/Buying" onClick={resetCart}>Terminar Compra</Link>
                    </div>
                </div> : 
                        <Link className="link_button_Comprar" to="/productos">Comprar</Link>
                }
        </div>
        
    )
}

export default Cart