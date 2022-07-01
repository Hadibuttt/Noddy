module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("clients", {
      item_id: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
          }
      },
      phone: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 1,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "New",
        allowNull: true
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ip_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      affiliate_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      source: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tag_1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tag_2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: true
      },
      assigned_date: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      modified_date: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      first_registration_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: true
      }
    });
  
    return Client;
  };