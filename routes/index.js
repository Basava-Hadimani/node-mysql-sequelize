const express = require("express");
const routes = express.Router()
const models = require("../models/");

routes.get('/getTasks', async function (request, response) {
    return await todo.findAll({
        attributes: ['id','title','completed'],
        where:{
            owner: request.query.email
        },
        limit:10
    }).then(function (users) {
        if (users) {
            response.send(users);
        } else {
            response.status(400).send('Error in insert new record');
        }
    });
});

routes.post("/createCustomer", async (req, res) => {
    let {id, name, pan, account_number} = req.body;

    try{
        let resp = await models.customers.create({
            id,
            name,
            pan,
            account_number
        });
        res.status(200).send({message:"Successfully created user" })
    }catch(err){
            res.status(500).send({errMsg : err})
    }

})

routes.post("/createBank", async (req, res) => {
    let {id, balance, user_id} = req.body;

    try{
        let resp = await models.bank.create({
            balance, 
            user_id
        });
        res.status(200).send({message:"Successfully created user" })
    }catch(err){
            res.status(500).send({errMsg : err})
    }

})

routes.get('/getBankDetails', async (req, res) => {
    // let resp = await models.bank.findAll({
    //     include:[models.customers]
    //   });

    let resp = await models.customers.findAll({
        include:[models.bank]
      });

    res.send(resp);
})

module.exports = routes;