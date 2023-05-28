const { marketplace_inventoryModel } = require('../models/marketplace_inventory.model');

/**
 * Get all cars from Database
 * */
const getAllCars = async (req, res) => {
     const { q, color, minprice = 0, maxprice = Infinity, minmileage = 0, maxmileage = Infinity } = req.query;

     try {
          // get cars data with OEM details and dealer's username
          const marketplace_data = await marketplace_inventoryModel.find().populate('oemSpec').populate('dealer', 'username').exec();

          let filteredMarketplace_data = marketplace_data;

          if (q) filteredMarketplace_data = marketplace_data.filter(el => el.oemSpec.model.match(new RegExp(q, "i"))); // searching by model name

          if (color) filteredMarketplace_data = filteredMarketplace_data.filter(el => el.oemSpec.colors.includes(color)); // filter by color

          if (minprice || maxprice) filteredMarketplace_data = filteredMarketplace_data.filter(el => (el.oemSpec.listPrice >= minprice && el.oemSpec.listPrice <= maxprice)); // filter on price

          if (minmileage || maxmileage) filteredMarketplace_data = filteredMarketplace_data.filter(el => (el.oemSpec.mileage >= minmileage && el.oemSpec.mileage <= maxmileage)); // filter on mileage

          res.status(200).send({ message: "success", data: filteredMarketplace_data });
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({
               message: error.message,
               error
          });
     }
};


/**
 * Post car in Database
 * */
const postCar = async (req, res) => {
     const userId = req.headers.userId;
     try {
          // post car data in database
          const newMarketplaceData = new marketplace_inventoryModel({ dealer: userId, ...req.body })
          await newMarketplaceData.save();
          res.status(201).send({ message: 'New car posted' })
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({
               message: error.message,
               error
          });
     }
};


/**
 * Update the car if you're the dealer
 * */
const updateCarDetails = async (req, res) => {
     const carId = req.params.id;
     const userId = req.headers.userId;
     const update = req.body;
     try {
          // finding cars created by the loggedin user
          const matchedCars = await marketplace_inventoryModel.find({ dealer: userId, _id: carId });
          if (matchedCars.length) {
               // find the car by it's id and update the data if you are the dealer
               await marketplace_inventoryModel.findByIdAndUpdate(carId, update);
               res.status(202).send({ message: "car data updated successfully." });
          } else {
               res.status(404).send({ message: "you're not authorized to edit the info of this car!" });
          }
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({
               message: error.message,
               error
          });
     }
};



/**
 * Delete the car if you're the dealer
 * */
const deleteCar = async (req, res) => {
     const carId = req.params.id;
     const userId = req.headers.userId;
     try {
          // finding cars created by the loggedin user
          const matchedCars = await marketplace_inventoryModel.find({ dealer: userId, _id: carId });
          if (matchedCars.length) {
               // find the car by it's id and delete if you are the dealer
               await marketplace_inventoryModel.findByIdAndDelete(carId,);
               res.status(202).send({ message: "car deleted successfully." });
          } else {
               res.status(404).send({ message: "you're not authorized to delete this car!" });
          }
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({
               message: error.message,
               error
          });
     }
};


module.exports = { getAllCars, postCar, updateCarDetails, deleteCar };