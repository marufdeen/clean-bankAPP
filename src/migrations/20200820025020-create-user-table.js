module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name field cannot be empty'
        }
      }
    }, 
    email: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          msg: 'invalid email address'
        }
      }
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password field cannot be empty'
        }
      }
    },
    accountBalance: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('user')
};
