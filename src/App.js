import NavBar from './components/Header/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailtContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Cart from "./components/MyCart/Cart"
import Buying from './components/FinishBuy.js/Buying';
import "./app.scss"
import CustomProvider from './components/Context/myContext';

function App() {
  const unList = [
    // {id:1, name: "Inicio", href: "/" },
    {id:3, name: "Contacto", href: "/Contactos"},
  ]
  const subList = [
    {id:4, name: "Hombre", href: "/Categoria/man"},
    {id:5, name: "Mujer", href: "/Categoria/woman"},
    {id:7, name: "unisex", href: "/Categoria/unisex"},
  ]

  return (
    <CustomProvider>
      <BrowserRouter>
          <NavBar links={unList} subLinks={subList}/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="Contactos" element={<Contacto/>}/>
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="/Categoria/:name" element={<ItemListContainer/>}/>
              <Route path="producto/:id" element={<ItemDetailtContainer />}/>
              <Route path="/Buying" element={<Buying/>}></Route>
          </Routes>
          
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
