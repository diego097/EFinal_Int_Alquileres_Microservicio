const express = require('express')
const Router = express.Router();
const alquilerCtrl = require('../controllers/alquiler')

//Metodos
//Router.post("/signup", userCtrl.signUp);

Router.get("/listAlquiler", alquilerCtrl.getAlquiler);
Router.post("/createAlquiler", alquilerCtrl.saveAlquiler);


module.exports = Router