const DataTypes = require('sequelize');
const { Model } = DataTypes

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, {
      modelName: 'User',
      tableName: 'Users',
      timestamps: false,
      charset: 'utf8',
      collate: 'utf8_general_ci', // for ko-kr
      sequelize
    })
  }

  static associate(db) {
  }
}