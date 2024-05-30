import { Model, QueryInterface, DataTypes } from 'sequelize';
import Book from '../../interfaces/book';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Book>>('books', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('books');
  }
};