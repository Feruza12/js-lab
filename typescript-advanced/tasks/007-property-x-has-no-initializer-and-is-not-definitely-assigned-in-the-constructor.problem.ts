// define a constructor
class User {
    constructor(private username: string) {}

    someMethod() {
        this.username = "FizzBuzz";
        console.log(this.username);
    }
}

