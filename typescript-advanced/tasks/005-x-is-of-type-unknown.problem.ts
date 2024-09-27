const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  console.log(error.message);
}
//optimised version
//TypeScript doesn't know what type of error coming so
//we check if it is the instance of Error
//it might come undefined if its not Error type
try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error:", error);
  }
}