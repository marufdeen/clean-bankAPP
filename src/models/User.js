module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name field cannot be empty'
        }
      }
    }, 
    email: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password field cannot be empty'
        }
      }
    }
  }, {});
 
  User.associate = function (models) {
    // associations can be defined here
    /* User.hasMany(models.Transaction, {
      foreignKey: 'userId',
      as: 'transactions',
      onDelete: 'CASCADE',
    }); *//* 
    User.hasMany(models.Card, {
      foreignKey: 'userId',
      as: 'cards',
      onDelete: 'CASCADE',
    }); */
  };
  
  return User;
};
