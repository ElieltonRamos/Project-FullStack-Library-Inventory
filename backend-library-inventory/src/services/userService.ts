import { compareSync, hashSync } from 'bcryptjs';
import databaseModel from '../interfaces/databaseModel';
import { ServiceResponse } from '../interfaces/responses';
import User, { NewUser, Token } from '../interfaces/user';
import { generateToken } from '../utils/jwt';

class UserService {

  constructor(
    private model: databaseModel<User>
  ) { }

  async createUser(user: NewUser): ServiceResponse<Token> {
    const { password, userName } = user;
    const userExists = await this.model.findOne('userName', userName);
    if (userExists) return { status: 'conflict', data: { message: 'User already exists' } };

    const passwordHash = hashSync(password);
    const newUser = await this.model.create({ ...user, password: passwordHash });

    if (!newUser.id) return { status: 'internalError', data: { message: 'internal server error' } };

    const token = generateToken({ id: newUser.id });
    return { status: 'created', data: { token } };
  }

  async login({ userName, password }: User): ServiceResponse<Token> {
    const user = await this.model.findOne('userName', userName);
    if (!user) return { status: 'notFound', data: { message: 'userName is not registered' } };

    const isValidPassword = compareSync(password, user.password);
    const errorMessage = 'Invalid userName or password';
    if (!isValidPassword) return { status: 'unauthorized', data: { message: errorMessage} };

    const payload = { id: user.id as number };

    const token = generateToken(payload);
    return { status: 'ok', data: { token } };
  }
}

export default UserService;