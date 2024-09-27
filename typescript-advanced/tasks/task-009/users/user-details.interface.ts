export type UserRole = "admin" | "editor" | "viewer";

export interface UserDetails {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
  phoneNumber: number | string;
  role: UserRole;
}

export type OptionalUser = Partial<UserDetails>;

export type RequiredUser = Required<UserDetails>;

export type UserContactInfo = Pick<UserDetails, "name"> &
  Pick<UserDetails, "email">;

export type UserWithoutAddress = Omit<UserDetails, "address">;

export type ReadonlyUser = Readonly<UserDetails>;
