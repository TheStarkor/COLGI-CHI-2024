const Sequelize = require('sequelize');

module.exports = class MetaData extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      selected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      visited: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'MetaData',
      tableName: 'metaData',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }

  static associate(db) {
    db.MetaData.belongsTo(db.GeneratedImage);
  }
}
