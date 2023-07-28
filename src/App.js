import './App.css';
import { Library, library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import QuienesSomos from "./components/Paginas/QuienesSomos";
import Error from "./components/Paginas/Error";
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/Navbar";
import Checkout from './components/Checkout/Checkout';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <CartProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Agroindustria El Destino!! Un sitio para el Productor Nacional"}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoria"}/>}/>
          <Route path="QuienesSomos" element={<QuienesSomos/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
