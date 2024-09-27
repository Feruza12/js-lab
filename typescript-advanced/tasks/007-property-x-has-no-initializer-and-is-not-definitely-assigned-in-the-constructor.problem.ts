// 1. Solution
class User {
  private username: string;
  constructor(username: string) {
    this.username = username;
  }
}

// 2. Solution by directly initilizing variable
class OtherUser {
  constructor(private username: string) {}
}
