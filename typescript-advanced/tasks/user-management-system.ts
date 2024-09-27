type Role = "admin" | "editor" | "viewer";
//1-task
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  address: string;
  phoneNumber: string;
    role: Role;
}

//2-task
type OptionalUser = Partial<User>;

type RequiredUser = Required<User>;

type UserContactInfo = Pick<User, "name" | "email">;

type UserWithoutAddress = Omit<UserActivation, "address">;

type ReadonlyUser = Readonly<User>;

//3-task

function updateUser(user: OptionalUser, existingUser: User): User {
  return { ...existingUser, ...user };
}

function displayContactInfo(contact: UserContactInfo): string {
  return `Name: ${contact.name}, Email: ${contact.email}`;
}

//4-task
type UserRoles = "admin" | `editor` | `viewer`;

type Permissions1 = Record<UserRoles, string[]>;

const rolePermissions: Permissions1 = {
  admin: ["read", "write", "edit", "delete", "access"],
  editor: ["read", "write", "edit", "access"],
  viewer: ["read", "access"],
};

function checkPermissions(user: User, permission: string): boolean {
  const userAccess = rolePermissions[user.role];
  return userAccess.includes(permission);
}

const user1: User = {
    id: "1",
    name: "Alice",
    role: "viewer",
    address: "i",
    age: 12,
    email: "ls",
    phoneNumber: "1234567890",
};

console.log(checkPermissions(user1, "edit")); // Output: true
console.log(checkPermissions(user1, "delete")); // Output: false
