const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const User = require('./user');
const Prompt = require('./prompt');
const GeneratedImage = require('./generatedImage');
const MetaData = require('./metaData');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.User = User;
db.Prompt = Prompt;
db.GeneratedImage = GeneratedImage;
db.MetaData = MetaData;

User.init(sequelize);
Prompt.init(sequelize);
GeneratedImage.init(sequelize);
MetaData.init(sequelize);

User.associate(db);
Prompt.associate(db);
GeneratedImage.associate(db);
MetaData.associate(db);

module.exports = db;
