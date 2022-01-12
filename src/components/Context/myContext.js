import { createContext, useContext, useState } from "react";

const context = createContext()

export const { Provider } = context

export const useMyContext = () =>{
    return useContext(context)
}
// console.log(context);


const CustomProvider = ({children}) => {

    const [totalQuantity, setTotalQuantity] = useState(0)
    const [myCart, setMyCart] = useState([])
    const [oneQuantity, setOneQuantity] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)


    const addToCart = (detail, amountItems) => {

            // console.log("soy el Provider");
                    console.log(detail, amountItems)

        const copia_producto = {...detail}
        copia_producto.quantity = amountItems

        setMyCart([...myCart,copia_producto])
        setTotalQuantity(totalQuantity + amountItems)
        setOneQuantity(amountItems)
    }




    const delateToCart = () => {
        // console.log(detail, amountItems);
        if(oneQuantity >= 1){
            setOneQuantity(oneQuantity - 1)
            setTotalQuantity(totalQuantity -1)
        } 
    }






    const resetCart = () => 
    {
        setMyCart([])
        setTotalQuantity(0)
    }

    // const isInCart = (id) => {}

    const contextValue = {
        totalQuantity, 
        myCart,
        oneQuantity,
        resetCart,
        addToCart,
        delateToCart
    }


    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider 