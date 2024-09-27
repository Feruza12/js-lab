export type ProductCategory =
  | "Electronics"
  | "Clothing"
  | "Furniture"
  | "Books"
  | "Beauty";

export type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

export interface ProductDetails {
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  price: number;
}
