
type ProductCategory = "Electronics" | "Clothing" | "Furniture" | "Books" | "Beauty";

type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

interface Product {
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  price: number;
}

function addProduct(product: Product): string {
    return `Product "${product.name}" added successfully!`;
}
function filterProductsByCategory(products: Product[], category: ProductCategory): Product[] {
    return products.filter(product => product.category === category);
}

function isProductAvailable(product: Product): boolean {
    return product.status === "In Stock";
}

const products: Product[] = [
    { name: "one", category: "Electronics", status: "In Stock", price: 30.000 },
    { name: "two", category: "Clothing", status: "Out of Stock", price: 20.000 },
    { name: "three", category: "Furniture", status: "In Stock", price: 40.000 },
    { name: "four", category: "Books", status: "In Stock", price: 50.000 },
    { name: "five", category: "Beauty", status: "Discontinued", price: 26.000 },
];
console.log(addProduct({ name: "six", category: "Books", status: "In Stock", price: 80.000}));
  
const library = filterProductsByCategory(products, "Books");
console.log("Books:", library);

const isAvailable = isProductAvailable(products[0]);
console.log(`Is "${products[0].name}" available? ${isAvailable}`);