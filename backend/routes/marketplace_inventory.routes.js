const express = require('express');
const { getAllCars, postCar, updateCarDetails, deleteCar } = require("../controllers/marketplace_inventory.controller");
const marketplace_inventoryRouter = express.Router();

marketplace_inventoryRouter.route("/")
     .get(getAllCars) // get all cars for marketplace
     .post(postCar) // Create marketPlace data

marketplace_inventoryRouter.route("/:id")
     .patch(updateCarDetails) // update cars details
     .delete(deleteCar) // delete car

module.exports = { marketplace_inventoryRouter };