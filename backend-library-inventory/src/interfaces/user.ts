export interface Token { token: string }

export type NewUser = Omit<User, 'id'>;

interface User {
  id?: number;
  displayName: string;
  password: string;
  image?: string;
}

export default User;