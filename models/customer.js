'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customer.hasOne(models.bank,
        {
          foreignKey:'user_id',
          targetKey: 'id'
        })
    }
  }
  customer.init({
    name: DataTypes.STRING,
    pan_number: DataTypes.STRING,
    account_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customer;
};