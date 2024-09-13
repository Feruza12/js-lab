// ERROR: expression of type 'string' can't be used to index type

const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

// --- FIX: create new union type from keys of productPrices object
const getPrice = (productName: string) => {
  return productPrices[productName as keyof typeof productPrices];
};
