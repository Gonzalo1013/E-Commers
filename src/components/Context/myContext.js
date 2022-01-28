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
        let sum = 0
        

        if(isInCart(id)) {
            const copy_cart = [...myCart]
            let match = copy_cart.find((p) => p.id === product.id)
            match.quantity = match.quantity + quantity
            setMyCart(copy_cart)
            copy_cart.forEach((res)=>{
                sum += res.price * res.quantity
                setTotalPrice(sum)
            })
        } else {
            const product_and_quantity = {
                ...product,
                quantity
            }
            sum = product_and_quantity.price * product_and_quantity.quantity
            setTotalPrice(sum)
            const copy = [...myCart]
            copy.forEach((res)=>{
                sum += res.price * res.quantity
                setTotalPrice(sum)
            })
            setMyCart([...myCart, product_and_quantity])
        }
        setTotalQuantity(totalQuantity + quantity)
    }


    const cleanToCart = (id, quantity) => {
        
        let cartFilter = myCart.filter(product => (product.id) !== id)
        setMyCart(cartFilter)
        setTotalQuantity(totalQuantity - quantity)
        let crashFilter = myCart.filter(product => (product.id) === id)
            crashFilter.forEach((res)=> {
                let subtraction = res.price * res.quantity
                setTotalPrice(totalPrice - subtraction)
            })
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
        totalPrice
    }


    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider 