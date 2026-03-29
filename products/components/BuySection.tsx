"use client";

import { useState } from "react";
import { Product, ProductVariant } from "../types";

import QuantitySelector from "./QuantitySelector";

interface Props {
  product: Product;
}

export default function BuySection({ product }: Props) {
  const [variant, setVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState<number>(1);

  function decreaseQuantity() {
    setQuantity((quantity) => Math.max(1, quantity - 1));
  }

  function increaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  return (
    <div>
      <p className="text-2xl font-medium">{variant.price} kr</p>
      <QuantitySelector
        quantity={quantity}
        onDecrease={decreaseQuantity}
        onIncrease={increaseQuantity}
      />
    </div>
  );
}
