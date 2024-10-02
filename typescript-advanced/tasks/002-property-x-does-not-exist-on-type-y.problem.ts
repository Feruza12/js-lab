// workaround #1 : define an interface with the age property
interface User1 {
    age: number;
    name: string;
}

const user1: User1 = {
    age: 23,
    name: "Matt"
};

user1.age = 24;

// workaround #2 : create a User class
class User2 {
    constructor(public age: number, public name: string) {}
}

const user2 = new User2(23, "Toby");

user2.age = 24;
