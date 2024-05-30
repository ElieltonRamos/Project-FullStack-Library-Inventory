import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class BookModelSequelize extends Model<InferAttributes<BookModelSequelize>,
InferCreationAttributes<BookModelSequelize>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare image: string;
  declare status: string;
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
}, {
  sequelize: db,
  underscored: true,
  modelName: 'books',
  timestamps: false,
})

export default BookModelSequelize;