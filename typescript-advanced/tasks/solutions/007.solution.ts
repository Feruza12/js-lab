export {};

// ERROR: private field username is not initialized

// --- FIX 1: initialize username in the constructor ---
class User {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }
}

// --- FIX 2: initialize username with a default value ---
// class User {
//   private username: string = "";
// }

// --- FIX 3: make username optional ---
// class User {
//   private username?: string;
// }
