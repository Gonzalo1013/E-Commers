import {db} from "../Firebase/Firebase"
import { collection , addDoc , serverTimestamp} from "firebase/firestore"
import { useMyContext } from "../Context/myContext" 
import "./buying.scss"

const Buying = () =>{
    const {myCart , resetCart, totalPrice} = useMyContext()
    
    const checkout = () => {

        let name = document.getElementById("name").value
                let lastName = document.getElementById("lastName").value
                let mail = document.getElementById("mail").value
                let telephone = document.getElementById("tel").value
                let adreess = document.getElementById("adreess").value
                let cp = document.getElementById("cp").value
                let city = document.getElementById("city").value
                let state = document.getElementById("state").value
            
                let formulario = document.getElementById("formulario")
                formulario.reset()

            myCart.forEach(() => {
                
                const salesCollection = collection(db, "sales")
                addDoc(salesCollection,{
                    buyer : {
                        name : name,
                        lastName : lastName,
                        email : mail,
                        Telefono : telephone,
                        adreess : adreess,
                        cp: cp,
                        city: city,
                        state: state
                    },
                    items : myCart ,
                    date : serverTimestamp(),
                    total : totalPrice
                })
                .then(()=>{
                    resetCart()
                })
            });

}


    return (
        <div className="contentForm">
                <h2>Dejenos sus datos para finalizar la compra</h2>

        <form id="formulario">
            <div className="data">
                <label >Nombres</label>
                <input type="text" placeholder="Juan" id="name" />
            </div>
            <div className="data">
                <label >Apellidos</label>
                <input type="text" placeholder="Perez" id="lastName"/>
            </div>
            <div className="data">
                <label >e-mail</label>
                <input type="text" placeholder="juanperez@hotmail.com" id="mail"/>
            </div>
            <div className="data">
                <label >Telefono sin 0 y 15</label>
                <input type="text" placeholder="3412268475" id="tel"/>
            </div>
            <div className="data">
                <label >Direccion </label>
                <input type="text" placeholder="Calle numero (piso y depto si corresponde)" id="adreess"/>
            </div>
            <div className="data">
                <label >Codigo Postal</label>
                <input type="text" placeholder="1001" id="cp"/>
            </div>
            <div className="data">
                <label >Ciudad</label>
                <input type="text" placeholder="Pilar" id="city"/>
            </div>
            <div className="data">
                <label >Provincia</label>
                <input type="text" placeholder="Buenos Aires" id="state"/>
            </div>
        </form>

            <button type="submit" onClick={checkout}>Comprar</button>
        </div>
    )
}

export default Buying