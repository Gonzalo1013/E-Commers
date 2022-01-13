import NavBar from './components/Header/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailtContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home"
import Contacto from './components/Pages/Contacto';
import Cart from "./components/MyCart/Cart"
import Buying from './components/Pages/Buying';
import "./app.scss"
import CustomProvider from './components/Context/myContext';

function App() {
  const unList = [
    {id:1, name: "Inicio", href: "/" },
    {id:3, name: "Contacto", href: "/Contactos"},
    // {id:6, href: "/Cart"},
  ]
  const subList = [
    {id:2, name: "Todos los Productos", href: "/Productos"},
    {id:4, name: "electronics", href: "/Categoria/electronics"},
    {id:5, name: "jewelery", href: "/Categoria/jewelery"},
    {id:7, name: "men's clothing", href: "/Categoria/men's clothing"},
    {id:9, name: "women's clothing", href: "/Categoria/women's clothing"}
  ]

  return (
    <CustomProvider>
      <BrowserRouter>
          <NavBar links={unList} subLinks={subList}/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              {/* <Route path="/Inicio" element={<Home/>}/> */}
              <Route path="Contactos" element={<Contacto/>}/>
              <Route path="/Productos" element={<ItemListContainer/>}/>
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
