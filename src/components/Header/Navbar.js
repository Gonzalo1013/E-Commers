import { NavLink} from "react-router-dom"
import CartLogo from "./CartWidgets"
import "./navBar.scss"


const NavBar = ({links}) => {

    
    return (
        <div className="contentNavBar">
            <NavLink to="/">
                <h2>Gonzalo Arroyo te da la bienvenida</h2>
            </NavLink>
            <ul className="unList">
                {links.map((list)=>
                <li key={list.id} className="listNavBar">
                    <NavLink className="linkLink" to={list.href}>{list.name}</NavLink>
                </li>
                )}
                <NavLink to="/cart"> 
                    <CartLogo/>
                </NavLink>
            </ul>
        </div>
                
            
        
    )

}


export default NavBar