'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define('hospital', {
    name: DataTypes.STRING,
    total_rooms: DataTypes.INTEGER,
    empty_rooms: DataTypes.INTEGER,
    free_rooms: DataTypes.INTEGER
  }, {});
  Hospital.associate = function(models) {
    // associations can be defined here
  };
  return Hospital;
};