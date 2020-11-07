const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class DM extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      modelName: 'DM',
      tableName: 'Dms',
      timestamps: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize
    })
  }

  static associate(db) {
    db.DM.belongsTo(db.User, { as: 'Sender' });
    db.DM.belongsTo(db.User, { as: 'Receiver' });
  }
}