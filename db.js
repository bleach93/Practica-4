const Sequelize = require('sequelize');
module.exports = new Sequelize('d2018030140','2018030140','wDaGg@EaJdvB', {//nombre de la tabla, usuario y contraseña
    host: '201.140.116.237',//direccion ip 201.140.116.237
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});