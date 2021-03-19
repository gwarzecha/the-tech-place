const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our User model with all of the inherited functionality from Model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
  
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;