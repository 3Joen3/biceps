"use server";

import { Product } from "./types";

export async function getProductBySlug(slug: string): Promise<Product> {
  const product: Product = {
    name: "Hantlar 5 - 20 kg",

    options: [
      {
        name: "Vikt",
        values: [{ value: "5kg" }, { value: "10kg" }, { value: "20kg" }],
      },
    ],

    variants: [
      {
        price: 199,
        options: [{ name: "Vikt", value: "5kg" }],
      },
      {
        price: 299,
        options: [{ name: "Vikt", value: "10kg" }],
      },
      {
        price: 399,
        options: [{ name: "Vikt", value: "20kg" }],
      },
    ],
  };

  return product;
}
