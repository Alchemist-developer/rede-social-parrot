const express = require("express");
const postsController = require("../domain/Posts/controllers/postsController");
const usersController = require("../domain/Users/controllers/usersController");
const routes = express.Router();

const authController = require("../domain/Auth/controllers/authController");
const login = require("../infrastructure/database/validator/loginTruster");

const auth = require("../middlewares/auth");

//Rotas CRUD Posts
routes.post("/posts/:id", postsController.createPosts);
routes.get("/posts", postsController.listPosts);
routes.put("/posts/:id", postsController.updatePosts);
routes.delete("/posts/:id", postsController.deletePosts);

//Rotas CRUD Users
routes.post("/users", usersController.addUser);
routes.get("/users", usersController.browseUser);
routes.put("/users/:id", usersController.updateUser);
routes.delete("/users/:id", usersController.deleteUser);

//Rotas CRUD Login
routes.post("/login", login, authController.login);

module.exports = routes;
