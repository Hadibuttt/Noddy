module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    timezone_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }    
});

  return User;
};
