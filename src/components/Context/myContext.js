import { createContext, useContext, useState } from "react";

const context = createContext()

export const { Provider } = context

export const useMyContext = () =>{
    return useContext(context)
}

const CustomProvider = ({children}) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [myCart, setMyCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const addToCart = (product, quantity) => {
        const id = product.id
        if(isInCart(id)) {
            const copy_cart = [...myCart]
            let match = copy_cart.find((p) => p.id === product.id)
            match.quantity = match.quantity + quantity
            setMyCart(copy_cart)
        } else {
            const product_and_quantity = {
                ...product,
                quantity
            }
            setMyCart([...myCart, product_and_quantity])
        }
        setTotalQuantity(totalQuantity + quantity)

    }
    
    
    const totalShop = () => {
        let suma = 0
        const copy_cart = [...myCart] 
        copy_cart.map((res)=>{
                suma += res.price * res.quantity
            return setTotalPrice(suma);
        })
    }
    
    

    const cleanToCart = (id, quantity) => {
        
        let cartFilter = myCart.filter(product => (product.id) !== id)
        setMyCart(cartFilter)
        setTotalQuantity(totalQuantity - quantity)
    }


    const resetCart = () => {
        setMyCart([])
        setTotalQuantity(0)
    }


    const isInCart = (id) => {
        return myCart.find((product)=>product.id === id)
    }


    const contextValue = {
        totalQuantity, 
        myCart,
        resetCart,
        addToCart,
        cleanToCart,
        totalPrice,
        totalShop
    }


    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider 