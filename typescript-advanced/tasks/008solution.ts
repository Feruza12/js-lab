type ProductCategory = "Electronics" | "Clothing" | "Furniture" | "Books" | "Beauty";
type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";
interface Product {
    name: string;
    category: ProductCategory;
    status: ProductStatus;
    price: number;
}

const addProduct = (product: Product,productList: Product[]):string => {
    productList.push(product);
    return `Product "${product.name} has been added"`;
}
const filterProductsByCategory = (products: Product[], category: ProductCategory):Product[] => {
    return products.filter(product => product.category === category);
}
const isProductAvailable = (product:Product): boolean => {
    return product.status === "In Stock";
}

const products: Product[] = [
    { name: "Laptop", category: "Electronics", status: "In Stock", price: 1000 },
    { name: "T-Shirt", category: "Clothing", status: "Out of Stock", price: 20 },
    { name: "Sofa", category: "Furniture", status: "In Stock", price: 500 },
    { name: "Novel", category: "Books", status: "In Stock", price: 15 },
    { name: "MacBook", category: "Electronics", status: "In Stock", price: 5000 },
];

// Add a new product to the list
console.log(addProduct({ name: "Face Cream", category: "Beauty", status: "In Stock", price: 30 }, products));

// Filter products by category
const electronics = filterProductsByCategory(products, "Electronics");
console.log(electronics);

// Check if a product is available
const laptop = products[0];
console.log(isProductAvailable(laptop)); // true

// Print all products
console.log(products);