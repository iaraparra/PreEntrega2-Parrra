import React, { createContext, useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addProduct = (item, newQuantity) =>{
    const {quantity = 0} = cart.find(item => item.id === item.id) || {};
    const newCart = cart.filter(item => item.id !== item.id);
    setCart([...newCart, { ...item, quantity: quantity + newQuantity}])
}

  console.log('carrito: ', cart)


  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }
  const totalProducts = () => {
    return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
  }

  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

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
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
