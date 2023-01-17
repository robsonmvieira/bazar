import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useMemo, useState } from "react";

export interface CartContextType {
  user: any,
  total: number,
  products: any[],
  countProduct: number,
  logoff: () => void,
  clearCart: () => void,
  setUser: (user: any) => void,
  addProduct: (product: any) => void,
  removeProduct: (product: any) => void,
  
}

const defaultState: CartContextType = {
  total: 0,
  user: null,
  products: [],
  countProduct: 0,
  logoff: () => {},
  setUser: () => {},
  clearCart: () => {},
  addProduct: () => {},
  removeProduct: () => {},
}


export const CartContext = createContext<CartContextType>(defaultState);

export const CartProvider = ({children}: any) => {
  const [products, setProducts] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  
  const total = useMemo(() => products.reduce((acc, product) => acc + product.price, 0), [products])


  const addProduct = useCallback((product: any) => {
    setProducts((prev) => [...prev, product]);
  }, [])

  const removeProduct = useCallback((product: any) => {
    setProducts(products.filter((p) => p.id !== product.id));
  }, [products])

  const clearCart = useCallback(() => {
    setProducts([]);
  }, [])

  const logout = useCallback(() => {
    setUser(null);
  }, [])

  const login = useCallback((user: any) => {
    setUser(user);
  }, [])

  const value = useMemo(() => ({
    addProduct, 
    clearCart, 
    removeProduct,
    setUser: login,
    logoff: logout,
    countProduct: products.length, 
    products,
    total, 
    user
  }), [addProduct, clearCart, removeProduct, login, logout, products, total, user])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
