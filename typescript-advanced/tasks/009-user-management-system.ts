interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
    phoneNumber: string;
    role: UserRole;
  }
  
  // 2. Utility Types
  type OptionalUser = Partial<User>;
  type RequiredUser = Required<User>;
  type UserContactInfo = Pick<User, 'name' | 'email'>;
  type UserWithoutAddress = Omit<User, 'address'>;
  type ReadonlyUser = Readonly<User>;
  
  // 3. User Roles
  type UserRole = 'admin' | 'editor' | 'viewer';
  
  // 4. Permissions Type
  type Permission = 'read' | 'write' | 'edit' | 'delete' | 'access';
  
  // 5. Role Permissions Mapping
  const rolePermissions: Record<UserRole, Permission[]> = {
    admin: ['read', 'write', 'edit', 'delete', 'access'],
    editor: ['read', 'write', 'edit', 'access'],
    viewer: ['read', 'access'],
  };
  
  // 6. Functions
  function updateUser(partialUser: Partial<User>, existingUser: User): User {
    return { ...existingUser, ...partialUser };
  }
  
  function displayContactInfo(userContactInfo: UserContactInfo): string {
    return `Name: ${userContactInfo.name}, Email: ${userContactInfo.email}`;
  }
  
  function checkPermissions(user: User, permission: Permission): boolean {
    return rolePermissions[user.role].includes(permission);
  }
  
  
  
  