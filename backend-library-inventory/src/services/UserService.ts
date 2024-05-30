import databaseModel from '../interfaces/databaseModel';
import { ServiceResponse } from '../interfaces/responses';
import User, { NewUser } from '../interfaces/user';

class UserService {

  constructor(
    private model: databaseModel<User>
  ) { }

  async createUser(data: NewUser): ServiceResponse<User> {
    const user = await this.model.create(data);
    return { status: 'ok', data: user };
  }
}

export default UserService;