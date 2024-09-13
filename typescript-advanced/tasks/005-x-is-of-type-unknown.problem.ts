const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }else{
    console.log("It looks like everything is correct");
  }
};

try {
  somethingDangerous();
} catch (error:any) {
  console.log(error.message);
}