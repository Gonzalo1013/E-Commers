import {db} from "../Firebase/Firebase"
import { collection , addDoc , serverTimestamp} from "firebase/firestore"
import { useMyContext } from "../Context/myContext" 
import "./buying.scss"
import { Link } from "react-router-dom"

const Buying = () =>{
    const {myCart , resetCart, totalPrice} = useMyContext()
    
    const checkout = () => {
        localStorage.clear()
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

                let thanks = document.getElementById("id_content_end")
                thanks.style.display = "flex"
                let ocultar_formulario = document.getElementById("id_content_form")
                ocultar_formulario.style.display = "none"

                
                
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
            

                myCart.forEach((res)=>{
                    let parent = document.getElementById("id_of_product")
                    let child = document.createElement("b")
                    child.textContent = res.id
                    parent.appendChild(child)
                })
            
}
    const finish = () => {
        let end = document.getElementById("id_content_end")
        end.style.display = "none"
    }
    
    return (
        <div className="content_all">
            <div className="contentForm" id="id_content_form">
                    <h2>Dejenos sus datos para finalizar la compra</h2>
                <form id="formulario" >
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

            <div className="content_end" id="id_content_end">
                <h3>Gracias por su compra!</h3>
                <p>con este codigo puedes ver el estado de tu pedido</p>
                <div id="id_of_product"></div>
                <button onClick={finish}>
                    <Link to="/" className="Link">Aceptar</Link>
                </button>
            </div>
        </div>
    )
}

export default Buying