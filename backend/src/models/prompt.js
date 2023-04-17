const Sequelize = require('sequelize');

module.exports = class Prompt extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      prompt: {
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Prompt',
      tableName: 'prompts',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }

  static associate(db) {
    db.Prompt.hasMany(db.GeneratedImage);
  }
}
