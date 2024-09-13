const productPrices: { [key in "Apple" | "Banana" | "Orange"]: number } = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (
  productName: "Apple" | "Banana" | "Orange"
): number | undefined => {
  return productPrices[productName];
};
