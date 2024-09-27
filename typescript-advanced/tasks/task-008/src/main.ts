import { myProductsDB } from "./products/product.db.js";
import { IProductDetails } from "./products/product-details.interface.js";
import { ProductManagementService } from "./products/product.service.js";

function main() {
  const productManagementService = new ProductManagementService(myProductsDB);

  const newProduct: IProductDetails = {
    name: "The Soft skills software developer's manual",
    category: "Books",
    status: "Discontinued",
    price: 70000,
  };
  const result = productManagementService.addProduct(newProduct);
  console.log(result);
}

main();
