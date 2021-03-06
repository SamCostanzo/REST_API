'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide a value for "first name"',
            },
            notEmpty: {
                msg: 'Please provide a value for "first name"',
            }
        },
    },
    
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide a value for "last name"',
            },
            notEmpty: {
                msg: 'Please provide a value for "last name"',
            }
        },
    },
    
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide a value for "email address"',
            },
            notEmpty: {
                msg: 'Please provide a value for "email address"',
            }
        },
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide a value for "password"',
            },
            notEmpty: {
                msg: 'Please provide a value for "password"',
            }
        },
    },
}, { sequelize });


User.associate = (models) => {
    User.hasMany(models.Course);
};

    return User;
}