import NavBar from './components/Header/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailtContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./app.scss"

function App() {
  const unList = [
    {id:1, name: "Inicio", href: "/linkHome" },
    {id:2, name: "Productos", href: "/Productos"},
    {id:3, name: "Contacto", href: "/Contactos"},
    // {id:4, name: "electronics", href: "/Categoria/electronics"},
    // {id:5, name: "jewelery", href: "/Categoria/jewelery"},
]
  return (
    <BrowserRouter>
        <NavBar links={unList}/>
        <Routes>
            <Route path="/" element=""/>
            <Route path="/Productos" element={<ItemListContainer/>}/>
            <Route path="Carrito" element=""/>
            {/* <Route path="Categoria/:id" element={<ItemListContainer/>}/> */}
            <Route path="producto/:id" element={<ItemDetailtContainer />}/>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
