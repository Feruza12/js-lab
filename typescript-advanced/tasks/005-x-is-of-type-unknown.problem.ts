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

//solution 1
const somethingDangerousOne = (): void => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try
  {
    somethingDangerousOne();
  } catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("An unknown error occurred");
  }
}