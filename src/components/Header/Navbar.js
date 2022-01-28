import { NavLink} from "react-router-dom"
import CartLogo from "./CartWidgets"
import "./navBar.scss"


const NavBar = ({links, subLinks}) => {

    
    return (
        <header className="contentNavBar">
            <NavLink to="/" className="prototipe">
                <img src="/bicycle.png" alt=""/>
                <h2>PePe´s Bikes</h2>
            </NavLink>
        
            <ul className="unList">
                
                <li className="subListTitle">Productos
                    <ul className="unSubList">
                        {subLinks.map((subList)=>
                        <li key={subList.id} className="subList">
                            <NavLink className="subLink" to={subList.href}> {subList.name} </NavLink>
                        </li>
                        )}
                    </ul>
                </li>

                {links.map((list)=>
                <li key={list.id} className="listNavBar">
                    <NavLink className="linkLink" to={list.href}>{list.name}</NavLink>
                </li>
            )}
                <li>
                    <NavLink to="/Cart"> 
                        <CartLogo/>
                    </NavLink>
                </li>
            </ul>
        </header>
    )

}


export default NavBar