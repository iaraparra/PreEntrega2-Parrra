/* import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Index";

function App() { */
/*   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../JSON/productos.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); */

/*   return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="inicio" />} />
        <Route
          path="/inicio"
          element={<ItemListContainer />}
        />
        <Route
          path="/:category"
          element={<ItemListContainer products={products} />}
        />
        <Route
          path="/category/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </div>
  );
} */

/* export default App; */


import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Index";

function App() {
  

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="inicio" />} />
        <Route
          path="/inicio"
          element={<ItemListContainer  />}
        />
       
        <Route
          path="/category/:id"
          element={<ItemDetailContainer  />}
        />
      </Routes>
    </div>
  );
}

export default App;