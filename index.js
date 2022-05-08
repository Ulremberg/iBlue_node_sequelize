const express = require('express');
const app = express();
const routes = require('./routes');

const buildingDataBase = require('./infrastructure/database/building-modeling-structure');
buildingDataBase.sequelize.sync();
app.use('/api', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, ()=>console.log("Server funcionando na porta 3001"));