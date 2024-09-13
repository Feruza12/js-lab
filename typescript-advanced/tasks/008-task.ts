type ProductCategory = 'Electronics' | 'Clothing' | 'Furniture' | 'Books' | 'Beauty'
type ProductStatus = 'In Stock' | 'Out of Stock' | 'Discontinued' | 'Product Interface'

interface Product {
  name: string;
  category:ProductCategory;
  status:ProductStatus;
  price:number;
}

function addProduct(product:Product):string {
  return `${product.name} has added to stock!`
}

function filterProductsByCategory(
  stock:Product[], filteredCategory:ProductCategory
):Product[] {
  return stock.filter(product => product.name == filteredCategory)
}

function isProductAvailable(product:Product):boolean {
  return product.status === 'In Stock'
}