const { DataTypes } = require('sequelize');
const db = require ('../index');

const Users = db.define (
  "Users",
  {
    idUsers: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apartment: {
      type: DataTypes.INTEGER
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    admin: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  },
  {
    tableName: "users",
  }

);

module.exports = Users;