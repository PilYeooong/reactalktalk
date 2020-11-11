const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class ChatRoom extends Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
      },
      type: {
        type: DataTypes.ENUM('public', 'dm'),
        allowNull: false
      }
    }, {
      modelName: 'ChatRoom',
      tableName: 'ChatRooms',
      timestamps: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize
    })
  }

  static associate(db) {
    db.ChatRoom.belongsToMany(db.User, { through: 'UserChatRoom', as: 'Members' });
    db.ChatRoom.hasMany(db.Chat);
  }
}