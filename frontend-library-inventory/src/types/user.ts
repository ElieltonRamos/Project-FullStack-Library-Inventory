export default interface User {
  id: number;
  userName: string;
  password: string;
  image?: string;
}

export type CreateUser = Omit<User, 'id'>;

export type LoggedUser = Omit<User, 'password'>;

export type Token = {
  token: string;
}