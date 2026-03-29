export interface AddToCartRequest {
  items: AddCartItemRequest[];
}

export interface AddCartItemRequest {
  productVariantId: number;
  quantity: number;
}
