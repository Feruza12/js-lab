interface User {
  name: string;
  age?:number
}
const user:User = {
  name: "Matt",
};
user.age = 24;