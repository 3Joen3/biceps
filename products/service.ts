"use server";

import { Product } from "./types";

export async function getProductBySlugAsync(slug: string): Promise<Product> {
  const product: Product = {
    name: "Hantlar 5 - 20 kg",

    options: [
      {
        id: 1,
        name: "Vikt",
        values: [
          { id: 1, name: "5kg" },
          { id: 2, name: "10kg" },
          { id: 3, name: "20kg" },
        ],
      },
    ],

    variants: [
      {
        id: 1,
        price: 199,
        options: [
          {
            optionId: 1,
            optionValueId: 1,
          },
        ],
      },
      {
        id: 2,
        price: 299,
        options: [
          {
            optionId: 1,
            optionValueId: 2,
          },
        ],
      },
      {
        id: 3,
        price: 399,
        options: [
          {
            optionId: 1,
            optionValueId: 3,
          },
        ],
      },
    ],
  };

  return product;
}
