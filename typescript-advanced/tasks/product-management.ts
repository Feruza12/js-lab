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
  return `${product.name} product added successfully`;
}

function filterProductsByCategory(
  product: Product[],
  productCategory: ProductCategory
): Product[] {
  return product.filter((item) => item.category === productCategory);
}

function isProductAvailable(product: Product): boolean {
  return product.status === "In Stock";
}
