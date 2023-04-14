import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/CheckOut";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;