const express = require('express');


const user = require('../../infrastructure/repository/user-repository/user-registration-repository');


const routes = express.Router();

routes.get("/usuario", user.userRegistrationRepository);

routes.post("/usuario", user.createUser);

module.exports = routes;
