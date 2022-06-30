module.exports = (sequelize, Sequelize) => {
    const Timezone = sequelize.define("timezones", {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true 
      },
      country_code: {
        type: Sequelize.STRING(3),
        allowNull: false
      },
      timezone: {
        type: Sequelize.STRING(125),
        allowNull: false,
        defaultValue: ' '
      },
      gmt_offset: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: true
      },
      dst_offset: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: true
      },
      raw_offset: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: true
      }
    });
  
    return Timezone;
  };
  