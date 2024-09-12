type ProductCategory = "Electronics" | "Clothing" | "Furniture" | "Books" | "Beauty";
type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

interface Product {
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  price: number
};

const arrayOfProducts: Product[] = [
  {
    name: "Jacket",
    category: "Clothing",
    status: "In Stock",
    price: 10.63
  },
  {
    name: "Gone with the wind",
    category: "Books",
    status: "In Stock",
    price: 5.17
  },
  {
    name: "Dress",
    category: "Clothing",
    status: "In Stock",
    price: 12.72
  },
  {
    name: "Sofa",
    category: "Furniture",
    status: "Out of Stock",
    price: 86.11
  },
]

function addProduct(obj: Product): string {
  if (!(arrayOfProducts.includes(obj))) {
    arrayOfProducts.push(obj);
    return "Product successfully added to the store.";
  } else {
    return "This product already exicts in the store.";
  }
}

addProduct({name: "Mascara", category: "Beauty", status: "Discontinued", price: 6.05});
console.log(arrayOfProducts);

function filterProductsByCategory(arrayOfProducts: Product[], productCategory: ProductCategory):string[] {
  const productsInOneCategory: string[] = [];
  for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].category === productCategory) {
      productsInOneCategory.push(arrayOfProducts[i].name);
    }
  }
  return productsInOneCategory;
}

console.log(filterProductsByCategory(arrayOfProducts, "Clothing"));