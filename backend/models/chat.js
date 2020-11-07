const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class ChatRoom extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      modelName: 'Chat',
      tableName: 'Chats',
      timestamps: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize
    })
  }

  static associate(db) {
    db.Chat.belongsTo(db.User);
    db.Chat.belongsTo(db.ChatRoom);
  }
}