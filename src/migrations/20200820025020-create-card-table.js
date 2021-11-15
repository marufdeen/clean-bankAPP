module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('card', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.STRING(255),
        allowNull: false,
      }, 
      walletId: {
        type: Sequelize.STRING(255),
        allowNull: false,
      }, 
      fourDigit: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Four digit field cannot be empty'
          }
        }
      },
      authCode: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Authentication_Code field cannot be empty'
          }
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }),
  
    down: (queryInterface, Sequelize) => queryInterface.dropTable('card')
  };
  