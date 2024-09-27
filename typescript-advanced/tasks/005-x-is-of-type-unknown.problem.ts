// 1. Solution with 'any'
const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error: any) {
  console.log(error.message);
}

// 2. Solution with type casting
const anotherSomethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error: unknown) {
  console.log((error as Error).message);
}
