"use client";

import { createContext, useContext, useState } from "react";
import { AddCartItemRequest, Cart } from "../types";
import { AddToCartAsync } from "../service";

interface CartContextType {
  cart: Cart | null;
  addCartItems: (request: AddCartItemRequest[]) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export default function CartContextProvider({ children }: Props) {
  const [cart, setCart] = useState<Cart | null>(null);

  async function addCartItems(request: AddCartItemRequest[]) {
    await AddToCartAsync(request);
  }

  return <CartContext.Provider value={{ cart, addCartItems }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within CartContextProvider");
  }

  return context;
}
