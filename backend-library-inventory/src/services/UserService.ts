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
    const { password, displayName } = user;
    const userExists = await this.model.findOne('displayName', displayName);
    if (userExists) return { status: 'conflict', data: { message: 'User already exists' } };

    const passwordHash = hashSync(password);
    const newUser = await this.model.create({ ...user, password: passwordHash });

    if (!newUser.id) return { status: 'internalError', data: { message: 'internal server error' } };

    const token = generateToken({ id: newUser.id, displayName });
    return { status: 'created', data: { token } };
  }

  async login({ displayName, password }: User): ServiceResponse<Token> {
    const user = await this.model.findOne('displayName', displayName);
    if (!user) return { status: 'notFound', data: { message: 'displayName is not registered' } };

    const isValidPassword = compareSync(password, user.password);
    const errorMessage = 'Invalid displayName or password';
    if (!isValidPassword) return { status: 'unauthorized', data: { message: errorMessage} };

    const payload = { id: user.id as number, displayName };

    const token = generateToken(payload);
    return { status: 'ok', data: { token } };
  }
}

export default UserService;