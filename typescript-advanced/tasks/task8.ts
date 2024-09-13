
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

const addProduct = (product: Product): string => {
  console.log(
    `Added: ${product.name}, Category: ${product.category}, Status: ${product.status}, Price: $${product.price}`
  );
  return `Product ${product.name} has been added.`;
};

const filterProductsByCategory = (
  products: Product[],
  category: ProductCategory
): Product[] => {
  return products.filter((product) => product.category === category);
};

const isProductAvailable = (product: Product): boolean => {
  return product.status === "In Stock";
};

const products: Product[] = [
  {
    name: "Smartphone",
    category: "Electronics",
    status: "In Stock",
    price: 699,
  },
  {
    name: "T-shirt",
    category: "Clothing",
    status: "Out of Stock",
    price: 29.99,
  },
  { name: "Sofa", category: "Furniture", status: "In Stock", price: 499 },
  { name: "Novel", category: "Books", status: "In Stock", price: 15 },
  { name: "Lipstick", category: "Beauty", status: "Discontinued", price: 25 },
];

addProduct({
  name: "Laptop",
  category: "Electronics",
  status: "In Stock",
  price: 999,
});

const electronics = filterProductsByCategory(products, "Electronics");
console.log(electronics);

const availableProduct = isProductAvailable(products[0]);
console.log(availableProduct);
