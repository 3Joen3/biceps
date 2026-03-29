"use client";

import { useState } from "react";
import { Product, ProductVariant } from "../types";

interface Props {
  product: Product;
}

export default function BuySection({ product }: Props) {
  const [variant, setVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div>
      <p>{variant.price} kr</p>
    </div>
  );
}
