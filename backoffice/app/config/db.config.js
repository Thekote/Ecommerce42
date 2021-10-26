const Sequelize = require('sequelize');
const sequelize = new Sequelize ('ecommerce42', 'postgres', 'apple', {
    host: "localhost",
    dialect: 'postgres'
});

module.exports = sequelize;