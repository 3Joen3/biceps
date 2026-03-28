export interface Product {
  name: string;
  options: ProductOption[];
  variants: ProductVariant[];
}

export interface ProductOption {
  name: string;
  values: ProductOptionValue[];
}

export interface ProductOptionValue {
  value: string;
}

export interface ProductVariant {
  price: number;
}
