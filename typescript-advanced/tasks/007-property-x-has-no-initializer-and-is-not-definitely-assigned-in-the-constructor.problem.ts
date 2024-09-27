class User {
  private username: string;
}

//solution

class UserOne {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  public getUsernameOne(): string {
    return this.username;
  }
  public setUsernameOne(username: string): void {
    this.username = username;
  }
}