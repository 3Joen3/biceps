export interface Product {
  name: string;
  options: ProductOption[];
  variants: ProductVariant[];
}

export interface ProductOption {
  id: number;
  name: string;
  values: ProductOptionValue[];
}

export interface ProductOptionValue {
  id: number;
  name: string;
}

export interface ProductVariant {
  options: ProductVariantOption[];
  price: number;
}

export interface ProductVariantOption {
  optionId: number;
  optionValueId: number;
}
