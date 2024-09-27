import {
  ProductDetails,
  ProductCategory,
} from "./product-details.interface.js";

export interface IProduct {
  addProduct(product: ProductDetails): string;
  filterProductsByCategory(
    products: ProductDetails[],
    category: ProductCategory
  ): ProductDetails[];
  isProductAvailable(product: ProductDetails): boolean;
}
