module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("clients", {
      item_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
          }
      },
      phone: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'New',
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ip_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      affiliate_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tag_1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tag_2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      assigned_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      modified_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      first_registration_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  
    return Client;
  };