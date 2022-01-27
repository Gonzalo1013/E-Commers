import {db} from "../Firebase/Firebase"
import { collection , addDoc , serverTimestamp} from "firebase/firestore"
import { useMyContext } from "../Context/myContext" 
import "./buying.scss"



const Buying = () =>{
    const {myCart , resetCart} = useMyContext()
    
    const checkout = () => {
        // console.log("se cargo la db");

            
            myCart.forEach((element) => {
                console.log(element);
                let price = element.price * element.quantity
                
                const salesCollection = collection(db, "sales")
                addDoc(salesCollection,{
                    buyer : {
                        name : "Juan",
                        lastName : "Perez",
                        email : "mail@mail.com",
                        Telefono : "321654875"
                    },
                    items : myCart ,
                    date : serverTimestamp(),
                    total : price
                })
                .then(()=>{
                    resetCart()
                })
            });

}


    return (
        <div className="contentForm">
                <h2>Dejenos sus datos para finalizar la compra</h2>

        <form>
            <div className="data">
                <label >Nombres</label>
                <input type="text" placeholder="Juan" id="name" />
            </div>
            <div className="data">
                <label >Apellidos</label>
                <input type="text" placeholder="Perez" id="apellido"/>
            </div>
            <div className="data">
                <label >e-mail</label>
                <input type="text" placeholder="juanperez@hotmail.com" id="mail"/>
            </div>
            <div className="data">
                <label >Telefono sin 0 y 15</label>
                <input type="text" placeholder="3412268475" id="telefono"/>
            </div>
        </form>

            <button onClick={checkout}>Comprar</button>
        </div>
    )
}

/* <p>estas por comprar {cantidad} {producto} a tan solo { precio}</p> */
export default Buying