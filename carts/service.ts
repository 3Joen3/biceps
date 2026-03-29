"use server";

import { AddCartItemRequest } from "./types";

export async function AddToCartAsync(request: AddCartItemRequest[]) {
  console.log(request);
}
