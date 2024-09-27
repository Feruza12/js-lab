// If we want to make username private and readonly property we can use getters
class UserName {
  private username: string;

  constructor(username:string){
    this.username = username
  }

  public getUserName(){
    return this.username
  }
}

const newUser = new UserName("Vention");
console.log(newUser.getUserName());