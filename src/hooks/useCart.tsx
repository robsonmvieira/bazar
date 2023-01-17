import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const useCart = () => {
  const { addProduct, 
    clearCart, 
    removeProduct,
    setUser: login,
    logoff: logout,
    countProduct, 
    products,
    total, 
    user } =  useContext(CartContext);

    return { addProduct,
      clearCart,
      removeProduct,
      login,
      logout,
      countProduct,
      products,
      total,
      user }
}