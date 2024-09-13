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

function updateUser(user: User, updates: OptionalUser): User {
  return { ...user, ...updates };
}

function displayContactInfo(contactInfo: UserContactInfo): string {
  return `Name: ${contactInfo.name}, Email: ${contactInfo.email}`;
}

type UserRole = "admin" | "editor" | "viewer";

type UserPermissions = {
  [key in UserRole]: string[];
};

const permissions: UserPermissions = {
  admin: ["read", "write", "edit", "delete", "access"],
  editor: ["read", "write", "edit", "access"],
  viewer: ["read", "access"],
};

function checkPermissions(user: User, permission: string): boolean {
  const userPermissions = permissions[user.role];
  return userPermissions.includes(permission);
}
