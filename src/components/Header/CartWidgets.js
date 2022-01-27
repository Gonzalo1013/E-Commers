import { useMyContext } from "../Context/myContext"

const CartLogo = () =>{

    const {totalQuantity} = useMyContext()
        
    return(
        <>
            <img className="logoCart" src="/logoCarrito.png" alt="cartLogo" />
            <b className="count">
                {totalQuantity}
            </b>
        </>
    )
}

export default CartLogo