// ERROR: error parameter in catch block is of type 'unknown'

const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

// --- FIX: narrowing error parameter to Error class ---
try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
}
