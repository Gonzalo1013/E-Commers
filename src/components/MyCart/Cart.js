import { useMyContext } from "../Context/myContext" 
import { Link } from "react-router-dom"
import "./cart_style.scss"

const Cart = () => {
    const {myCart, totalQuantity, resetCart, cleanToCart, totalPrice} = useMyContext()
    return(
        <div className="contentCart">
            
            {myCart.length > 0 ? (
                <ul className="ulCart">
                    
                    {myCart.map((product, index)=>{
                        let finalPrice = product.price * product.quantity

                        return  <li key={index} className="liCart" >
                                    <div>
                                        <img src={product.image} alt="" />
                                        <h5>{product.name}</h5>
                                    </div>
                                    <div>
                                        <b>${finalPrice}</b>
                                        
                                        <p>X{product.quantity}</p>
                                        
                                        <button className="button_delateToCart" onClick={()=>cleanToCart(product.id,product.quantity)}><img src="/logo_Eliminar.png" alt="delete_log" /></button>
                                    </div>
                                </li>                       
                        })}
                </ul>
            ) : <p className="p_carrito_vacio"> No hay productos en el carrito!!!</p>}

            {myCart.length > 0 ? 
                <div className="content_link_button_totalQuantity">
                    <div>
                        <h3>
                            {}
                        </h3>
                    </div>
                            <p>Cantidad Total de productos: {totalQuantity}</p>
                    <div className="content_button_totalQuantity">
                        <p className="totalPrice" >El precio Total es: ${totalPrice},00</p>
                        <button className="button_reset" onClick={resetCart}>Limpiar el Carrito</button>
                    </div>


                    <div className="link_button_finish">
                            <button className="buttonFinish">
                                <Link className="Link_terminar" to="/Buying" >Terminar Compra</Link>
                            </button>
                    </div>
                </div> 

                :   <button className="button_Comprar">
                        <Link className="link_button_Comprar" to="/">Comprar</Link>
                    </button>
                }
        </div>
        
    )
}


export default Cart