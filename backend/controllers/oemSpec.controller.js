const { oemSpecModel } = require('../models/oemSpec.model');

const getAllOems = async (req, res) => {
     try {
          // get all OEM-specs from Databse
          const OEMs = await oemSpecModel.find();
          res.status(200).send({ message: 'Success', data: OEMs });
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({
               message: error.message,
               error
          });
     }
}


const postOEMs = async (req, res) => {
     try {
          // Post OEM-specs in the database
          await oemSpecModel.insertMany([
               {
                    "model": "Honda City",
                    "year": 2021,
                    "listPrice": 20000,
                    "colors": ["White", "Silver", "Black"],
                    "mileage": 5000,
                    "power": 150,
                    "maxSpeed": 180
               },
               {
                    "model": "Toyota Corolla",
                    "year": 2018,
                    "listPrice": 18000,
                    "colors": ["Red", "Blue", "Gray"],
                    "mileage": 8000,
                    "power": 140,
                    "maxSpeed": 170
               },
               {
                    "model": "BMW 3 Series",
                    "year": 2019,
                    "listPrice": 30000,
                    "colors": ["Black", "White", "Silver"],
                    "mileage": 6000,
                    "power": 200,
                    "maxSpeed": 200
               },
               {
                    "model": "Audi A4",
                    "year": 2020,
                    "listPrice": 28000,
                    "colors": ["Blue", "Gray", "White"],
                    "mileage": 7000,
                    "power": 180,
                    "maxSpeed": 190
               },
               {
                    "model": "Mercedes-Benz C-Class",
                    "year": 2017,
                    "listPrice": 25000,
                    "colors": ["Black", "Silver", "Red"],
                    "mileage": 9000,
                    "power": 160,
                    "maxSpeed": 180
               },
               {
                    "model": "Maruti Swift",
                    "year": 2019,
                    "listPrice": 12000,
                    "colors": ["Red", "Blue", "White"],
                    "mileage": 10000,
                    "power": 100,
                    "maxSpeed": 150
               },
               {
                    "model": "Hyundai Tucson",
                    "year": 2020,
                    "listPrice": 22000,
                    "colors": ["White", "Silver", "Black"],
                    "mileage": 8000,
                    "power": 150,
                    "maxSpeed": 180
               },
               {
                    "model": "Ford Mustang",
                    "year": 2018,
                    "listPrice": 35000,
                    "colors": ["Blue", "Black", "Yellow"],
                    "mileage": 6000,
                    "power": 300,
                    "maxSpeed": 250
               },
               {
                    "model": "Chevrolet Camaro",
                    "year": 2019,
                    "listPrice": 33000,
                    "colors": ["Red", "Black", "White"],
                    "mileage": 7000,
                    "power": 280,
                    "maxSpeed": 240
               },
               {
                    "model": "Nissan Altima",
                    "year": 2020,
                    "listPrice": 19000,
                    "colors": ["Black", "Gray", "Silver"],
                    "mileage": 9000,
                    "power": 160,
                    "maxSpeed": 190
               }
          ])
          res.status(201).send({ message: 'OEMs created successfully.' })
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({
               message: error.message,
               error
          });
     }
}

module.exports = { getAllOems, postOEMs };