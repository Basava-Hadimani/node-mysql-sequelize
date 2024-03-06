Init sequelize
          sequelize init
create a model
          sequelize model:generate --name customers --attributes id:number,name:string,pan:string,account_number:string
migrate table to do
          sequelize db:migrate --name 20240305104015-create-customers.js


Run the server : npm start


This repo explains belongTo and hasOne assotiation
