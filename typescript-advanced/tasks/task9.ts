
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  address: string;
  phoneNumber: string;
  role: UserRole;
}

type OptionalUser = Partial<User>;
type RequiredUser = Required<User>;
type UserContactInfo = Pick<User, "name" | "email">;
type UserWithoutAddress = Omit<User, "address">;
type ReadonlyUser = Readonly<User>;

type UserRole = "admin" | "editor" | "viewer";

type Permissions = {
  [role in UserRole]: string[];
};

const rolePermissions: Permissions = {
  admin: ["read", "write", "edit", "delete", "access"],
  editor: ["read", "write", "edit", "access"],
  viewer: ["read", "access"],
};

const updateUser = (updates: Partial<User>, existingUser: User): User => {
  return { ...existingUser, ...updates };
};

const displayContactInfo = (contactInfo: UserContactInfo): string => {
  return `Name: ${contactInfo.name}, Email: ${contactInfo.email}`;
};

const checkPermissions = (user: User, permission: string): boolean => {
  return rolePermissions[user.role].includes(permission);
};

const user: User = {
  id: "123",
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  address: "123 Main St",
  phoneNumber: "555-1234",
  role: "admin",
};

const updatedUser = updateUser({ email: "alice.new@example.com" }, user);
console.log(
  displayContactInfo({ name: updatedUser.name, email: updatedUser.email })
);
console.log(checkPermissions(updatedUser, "edit")); // true
console.log(checkPermissions(updatedUser, "write")); // true
console.log(checkPermissions(updatedUser, "delete")); // true
console.log(checkPermissions(updatedUser, "access")); // true
console.log(checkPermissions(updatedUser, "foo")); // false
