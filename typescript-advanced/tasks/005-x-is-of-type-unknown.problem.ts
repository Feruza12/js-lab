// in this case type of error is unknown, we can handle this using Type guard instanceof 
const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  if(error instanceof Error){
    console.log(error.message);
  }
}