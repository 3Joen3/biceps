"use client";

import { useState } from "react";
import { Product, ProductVariant } from "../types";
import { AddCartItemRequest } from "@/carts/types";
import { useCartContext } from "@/carts/components/CartContextProvider";

import QuantitySelector from "./QuantitySelector";
import OptionValueSelector from "./OptionValueSelector";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: Product;
}

export default function BuySection({ product }: Props) {
  const [variant, setVariant] = useState<ProductVariant>(product.variants[0]);

  function handleSelectOptionValue(optionValueId: number) {
    const selectedVariant = product.variants.find((variant) =>
      variant.options.some((option) => option.optionValueId === optionValueId),
    );

    if (!selectedVariant) return;

    setVariant(selectedVariant);
  }

  const [quantity, setQuantity] = useState<number>(1);

  function decreaseQuantity() {
    setQuantity((quantity) => Math.max(1, quantity - 1));
  }

  function increaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  const { addCartItems } = useCartContext();

  async function handleAddToCart() {
    const request: AddCartItemRequest[] = [{ productVariantId: variant.id, quantity: quantity }];
    await addCartItems(request);
  }

  return (
    <div>
      <p className="text-2xl font-medium">{variant.price} kr</p>

      {product.options.map((option) => (
        <OptionValueSelector key={option.name} option={option} onSelect={handleSelectOptionValue} />
      ))}

      <QuantitySelector
        quantity={quantity}
        onDecrease={decreaseQuantity}
        onIncrease={increaseQuantity}
      />

      <AddToCartButton onClick={handleAddToCart} />
    </div>
  );
}
