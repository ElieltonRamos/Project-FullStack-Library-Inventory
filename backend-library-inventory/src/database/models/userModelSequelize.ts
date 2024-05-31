import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class UserModelSequelize extends Model<InferAttributes<UserModelSequelize>,
InferCreationAttributes<UserModelSequelize>> {
  declare id: CreationOptional<number>;
  declare userName: string;
  declare password: string;
  declare image: CreationOptional<string>;
}

UserModelSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
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

export default UserModelSequelize;