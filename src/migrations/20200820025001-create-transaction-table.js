module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('transaction', {
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
    amount: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Amount field cannot be empty'
        }
      }
    },
    transactionType: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Transaction type field cannot be empty'
        }
      }
    },
    referenceNumber: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Reference number type field cannot be empty'
        }
      }
    },
    accountName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Account name field cannot be empty'
        }
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('transaction')
};
