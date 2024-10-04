const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Deck', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Deck;