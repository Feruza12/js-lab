type ProductCategory =
  | "Electronics"
  | "Clothing"
  | "Furniture"
  | "Books"
  | "Beauty";
type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

interface Product {
  name: string;
  price: number;
  category: ProductCategory;
  status: ProductStatus;
}

function addProduct(product: Product) {
  console.log(`Product ${product.name} added successfully`);
}

function filterProductsByCategory(
  products: Product[],
  category: ProductCategory
): Product[] {
  return products.filter((product) => product.category === category);
}

function isProductAvailable(product: Product): boolean {
  return product.status === "In Stock";
}
