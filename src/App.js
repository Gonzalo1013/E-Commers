import NavBar from './components/Header/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import DetailtContainer from './components/DetailContainer/DetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const unList = [
    {id:1, name: "Inicio", href: "/linkHome" },
    {id:2, name: "Productos", href: "/Productos"},
    {id:3, name: "Contacto", href: "/Contactos"},
    {id:4, name: "Categoria 1", href: "/Categoria/1"},
    {id:5, name: "Categoria 2", href: "/Categoria/2"},
]
  return (
    <BrowserRouter>
        <NavBar links={unList}/>
        <Routes>
            <Route path="/" element=""/>
            <Route path="/Productos" element={<ItemListContainer/>}/>
            <Route path="producto/:id" element={<DetailtContainer />}/>
            <Route path="Carrito" element=""/>
            <Route path="Categoria/:id" element={<ItemListContainer/>}/>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
