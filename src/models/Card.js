module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('card', {
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
      walletId: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }, 
      fourDigit: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Four digit field cannot be empty'
          }
        }
      },
      authCode: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Authentication_Code field cannot be empty'
          }
        }
      }
    }, {
      freezeTableName: true,
    });
  Card.associate = function (models) {
/*     // associations can be defined here
    Card.hasMany(models.Transaction, {
      foreignKey: 'cardId',
      as: 'cards',
      onDelete: 'CASCADE',
    });
    Card.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
      onDelete: 'CASCADE',
    });*/
  }; 
    return Card;
  };