"use client";

import { useState } from "react";
import { ProductVariant } from "../types";

export default function BuySection() {
  const [variant, setVariant] = useState<ProductVariant>();
  const [quantity, setQuantity] = useState<number>();

  return <div>BuySection</div>;
}
