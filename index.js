const express = require('express');
const app = express();
const index = require('./interface/routes/index');
const user = require('./interface/routes/user-routes');
const buildingDataBase = require('./infrastructure/database/building-modeling-structure');
buildingDataBase.sequelize.sync();

app.use(index);
app.use(user)

app.listen(3001, ()=>console.log("Server funcionando na porta 3001"));