type ProductCategory =
  | "Electronics"
  | "Clothing"
  | "Furniture"
  | "Books"
  | "Beauty";

type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

interface Product {
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  price: number;
}

function addProduct(product: Product): string {
  return `${product.name} has been added`;
}

function filterProductsByCategory(
  products: Array<Product>,
  category: ProductCategory
): Array<Product> {
  return products.filter((product) => product.category === category);
}

function isProductAvailable(product: Product): boolean {
  return product.status === "In Stock";
}
