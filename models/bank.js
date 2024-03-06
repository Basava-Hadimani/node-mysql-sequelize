'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bank.belongsTo(models.customers,             
        {
          foreignKey:'user_id',
          targetKey: 'id'
        })
    }
  }
  bank.init({
    balance: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "customers",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'bank',
  });
  return bank;
};