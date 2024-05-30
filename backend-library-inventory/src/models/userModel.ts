import UserModelSequelize from '../database/models/userModelSequelize';
import databaseModel from '../interfaces/databaseModel';
import User from '../interfaces/user';

class UserModel implements databaseModel<User> {
  private model = UserModelSequelize;

  async create(data: User): Promise<User> {
    const newUser = await this.model.create(data);
    return newUser.dataValues;
  }

  async findAll(): Promise<User[]> {
    const responseDB = await this.model.findAll();
    const allUsers = responseDB.map((user) => user.dataValues);
    return allUsers;
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    return user.dataValues;
  }

  async findOne(field: string, value: string): Promise<User | null> {
    const user = await this.model.findOne({ where: { [field]: value } });
    if (!user) return null;
    return user.dataValues;
  }

  async update(id: number, data: User): Promise<number> {
    const responseDB = await this.model.update(data, { where: { id } });
    return responseDB[0];
  }

  async delete(id: number): Promise<number> {
    const responseDB = await this.model.destroy({ where: { id } });
    return responseDB;
  }
}

export default UserModel;