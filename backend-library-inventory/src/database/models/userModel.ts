import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class UsersModelSequelize extends Model<InferAttributes<UsersModelSequelize>,
InferCreationAttributes<UsersModelSequelize>> {
  declare id: CreationOptional<number>;
  declare displayName: string;
  declare password: string;
  declare image: CreationOptional<string>;
}

UsersModelSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'users',
  timestamps: false,
})

export default UsersModelSequelize;