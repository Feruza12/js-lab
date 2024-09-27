export {};

// ERROR: Property 'age' does not exist on type '{ name: string; }'

// --- FIX 1: use interface to define object structure, and set age as optional ---
interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Matt",
};

user.age = 24;

// --- FIX 2: use type assertion ---
// const user = {
//   name: "Matt",
// } as { name: string; age?: number };

// user.age = 24;
