import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    const newObj = { ...item, quantity };
    if (isInCart(newObj.id)) {
      cart.map((el) => {
        if (el.id === newObj.id) {
          el.quantity += newObj.quantity;
        }
        return el;
      });
    } else {
      setCart([...cart, newObj]);
    }
  };

  const isInCart = (id) => {
    return cart.some((el) => el.id === id);
  };

  console.log("carrito: ", cart);

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProducts = () => {
    return cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );
  };

  const clearCart = () => setCart([]);

  const removeProduct = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
