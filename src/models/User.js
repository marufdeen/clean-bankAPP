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
    },  
    accountBalance: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    freezeTableName: true,
  });
  User.associate = function (models) {
  // associations can be defined here
    User.hasMany(models.transaction, {
      foreignKey: 'userId'
    });
  };
  return User;
};
