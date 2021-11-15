module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transaction', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }, 
    cardId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }, 
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Amount field cannot be empty'
        }
      }
    },
    transactionType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Transaction type field cannot be empty'
        }
      }
    },
    referenceNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Reference number type field cannot be empty'
        }
      }
    }, 
  }, {
    freezeTableName: true,
  });
  Transaction.associate = function(models) {
    // associations can be defined here
   /*  Transaction.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'cards',
    });
    Transaction.belongsTo(models.Card, {
      foreignKey: 'cardId',
      as: 'cards',
      onDelete: 'CASCADE',
    }); */
  };
  return Transaction;
};