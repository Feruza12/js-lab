// First solution: we can use Type Guard (in) and check if there is an age property in object and then change a value
const user5 = {
  name: "Matt",
};

if("age" in user5){
  user5.age = 24;
}


// Second solution: we need to add age property to the object and then change its value
const user6 = {
  name: "Matt",
  age: 20
};

user6.age = 24;


// Third solution: we can create interface with necessary properties and assign it with Type Assertion/Casting
interface UserInfo{
  name: string,
  age?: number
}
const user7 = {
  name: "Matt"
} as UserInfo;

user7.age = 24;
