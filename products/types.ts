export interface Product {
  name: string;
  options: ProductOption[];
}

export interface ProductOption {
  name: string;
  values: ProductOptionValue[];
}

export interface ProductOptionValue {
  value: string;
}
