interface User {
  id?: number;
  displayName: string;
  password: string;
  image?: string;
}

export type NewUser = Omit<User, 'id'>;

export default User;