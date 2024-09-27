import { PRODUCT_ADDED_SUCCESSFULLY } from "./constants/messages.js";
import {
  ProductDetails,
  ProductCategory,
} from "./product-details.interface.js";
import { IProduct } from "./product.interface.js";

export class ProductManagementService implements IProduct {
  private storage: ProductDetails[];
  constructor(externalStorage?: ProductDetails[]) {
    this.storage = externalStorage || [];
  }

  addProduct(product: ProductDetails): string {
    this.storage.push(product);
    return PRODUCT_ADDED_SUCCESSFULLY;
  }

  filterProductsByCategory(
    products: ProductDetails[],
    category: ProductCategory
  ): ProductDetails[] {
    return products.filter((product) => product.category == category);
  }

  isProductAvailable(product: ProductDetails): boolean {
    return product.status == "In Stock" ? true : false;
  }
}
