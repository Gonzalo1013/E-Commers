import NavBar from './components/Header/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailtContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home"
import Contacto from './components/Pages/Contacto';
import "./app.scss"

function App() {
  const unList = [
    {id:1, name: "Inicio", href: "/Inicio" },
    {id:2, name: "Productos", href: "/Productos"},
    {id:3, name: "Contacto", href: "/Contactos"},
    // {id:4, name: "electronics", href: "/Categoria/electronics"},
    // {id:5, name: "jewelery", href: "/Categoria/jewelery"},
]
  return (
    <BrowserRouter>
        <NavBar links={unList}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Inicio" element={<Home/>}/>
            <Route path="Contactos" element={<Contacto/>}/>
            <Route path="/Productos" element={<ItemListContainer/>}/>
            <Route path="Carrito" element=""/>
            {/* <Route path="Categoria/:id" element={<ItemListContainer/>}/> */}
            <Route path="producto/:id" element={<ItemDetailtContainer />}/>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
