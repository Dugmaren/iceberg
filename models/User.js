module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    program_id: {
        type: Sequelize.INTEGER
    },
    google_id: {
        type: Sequelize.TEXT
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    username: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    access: {
        type: Sequelize.ENUM('admin', 'customer', 'online', 'none'),
        defaultValue: 'none'
    },
    active: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  });

  return User;
};
