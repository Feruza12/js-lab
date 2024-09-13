type UserRole = 'admin' | 'editor' | 'viewer'

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  address: string;
  phoneNumber: string;
  role: UserRole
}

type OptionalUser = Partial<User>
type RequiredUser = Required<User>
type UserContactInfo = Pick<User, 'name' | 'email'>
type UserWithoutAddress = Omit<User, 'address'>
type ReadonlyUser = Readonly<User>

function updateUser(existingUser:User, userUpdates:Partial<User>):User {
  return { ...existingUser, ...userUpdates };
}

function displayContactInfo(userContacts:UserContactInfo):string {
  return `Username: ${userContacts.name}\nEmail: ${userContacts.email}`;
}

type Possibilities = 'read' | 'write' | 'edit' | 'delete' | 'access'

type Permission = {
  admin: Possibilities[];
  editor: Extract<Possibilities, 'read' | 'write' | 'edit'>[];
  viewer: Extract<Possibilities, 'read' | 'access'>[];
};

const rolePermissions: Permission = {
  admin: ['read', 'write', 'edit', 'delete', 'access'],
  editor: ['read', 'write', 'edit'],
  viewer: ['read', 'access'],
};

function checkPermissions(user:User, possibility:Possibilities) {
  const userPermissions = rolePermissions[user.role];
  return userPermissions.includes(possibility as any);
}

