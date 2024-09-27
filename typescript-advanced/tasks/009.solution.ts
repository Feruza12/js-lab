type UserRole = "admin" | "editor" | "viewer";

interface User {
  id: number;
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

function updateUser(user: User, update: Partial<User>): User {
  return { ...user, ...update };
}

function displayContactInfo(contactInfo: UserContactInfo) {
  console.log(contactInfo);
}

type UserPermissions = {
  [key in UserRole]: string[];
};

const permissions: UserPermissions = {
  admin: ["read", "write", "edit", "delete", "access"],
  editor: ["read", "write", "edit", "access"],
  viewer: ["read", "access"],
};

function checkPermissions(user: User, permission: string) {
  return permissions[user.role].includes(permission);
}
