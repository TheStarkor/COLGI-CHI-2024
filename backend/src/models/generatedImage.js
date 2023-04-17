const Sequelize = require('sequelize');

module.exports = class GeneratedImage extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      imageUrl: {
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'GeneratedImage',
      tableName: 'generatedImages',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }

  static associate(db) {
    db.GeneratedImage.hasMany(db.MetaData);
    db.GeneratedImage.belongsTo(db.User);
    db.GeneratedImage.belongsTo(db.Prompt);
  }
}
