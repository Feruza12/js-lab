### Problem Statement:

You are building a simple product management system for an online store. Each product can belong to one of several categories and can have a specific status. You will use TypeScript to enforce the allowed categories and statuses using union types and literal types.

Task Requirements:
Product Categories:

Define a union type ProductCategory that represents the allowed categories for products. The categories should include:
**_"Electronics"_**
**_"Clothing"_**
**_"Furniture"_**
**_"Books"_**
**_"Beauty"_**
Product Status:

Define a union type ProductStatus that represents the status of a product. The statuses should include:
**_"In Stock"_**
**_"Out of Stock"_**
**_"Discontinued"_**
**_Product Interface:_**

Create an interface Product that includes the following properties:
`name`: a string representing the name of the product.
`category`: a ProductCategory representing the category of the product.
`status`: a ProductStatus representing the current status of the product.
`price`: a number representing the price of the product.

Functions:

**Add Product Function:**
Create a function addProduct that accepts an object of type Product and returns a string confirming the product has been added.
**Filter Products by Category:**
Create a function filterProductsByCategory that accepts an array of Product and a ProductCategory, and returns an array of products that belong to the specified category.
**Check Product Availability:**
Create a function isProductAvailable that accepts a Product and returns true if the product is "In Stock", and false otherwise.

