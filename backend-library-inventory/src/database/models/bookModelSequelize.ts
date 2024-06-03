import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import UserModelSequelize from './userModelSequelize';
import { StatusBook } from '../../interfaces/book';

class BookModelSequelize extends Model<InferAttributes<BookModelSequelize>,
InferCreationAttributes<BookModelSequelize>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare image: string;
  declare status: StatusBook;
  declare checkoutUser: CreationOptional<number | null>;
}

BookModelSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkoutUser: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'books',
  timestamps: false,
})

BookModelSequelize.belongsTo(UserModelSequelize, {foreignKey: 'checkoutUser', as: 'bookBorrowedUser', onDelete: 'CASCADE' , onUpdate: 'CASCADE'});
UserModelSequelize.hasMany(BookModelSequelize, {foreignKey: 'checkoutUser', as: 'userBorrowedBooks', onDelete: 'CASCADE' , onUpdate: 'CASCADE'});

export default BookModelSequelize;