var addProduct = function (product, productList) {
    productList.push(product);
    return "Product \"".concat(product.name, " has been added\"");
};
var filterProductsByCategory = function (products, category) {
    return products.filter(function (product) { return product.category === category; });
};
var isProductAvailable = function (product) {
    return product.status === "In Stock";
};
var products = [
    { name: "Laptop", category: "Electronics", status: "In Stock", price: 1000 },
    { name: "T-Shirt", category: "Clothing", status: "Out of Stock", price: 20 },
    { name: "Sofa", category: "Furniture", status: "In Stock", price: 500 },
    { name: "Novel", category: "Books", status: "In Stock", price: 15 },
    { name: "MacBook", category: "Electronics", status: "In Stock", price: 5000 },
];
// Add a new product to the list
console.log(addProduct({ name: "Face Cream", category: "Beauty", status: "In Stock", price: 30 }, products));
// Filter products by category
var electronics = filterProductsByCategory(products, "Electronics");
console.log(electronics);
// Check if a product is available
var laptop = products[0];
console.log(isProductAvailable(laptop)); // true
// Print all products
console.log(products);
