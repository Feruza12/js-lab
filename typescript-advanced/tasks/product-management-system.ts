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
    return `Added product ${product.name} costing $${product.price}`;
}

function filterProductsByCategory(
    products: Product[],
    category: ProductCategory
): Product[] {
    return products.filter(function (product) {
        return product.category == category;
    });
}

function isProductAvailable(product: Product): boolean {
    return product.status == "In Stock";
}
