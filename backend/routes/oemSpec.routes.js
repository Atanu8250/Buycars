const express = require('express');
const { getAllOems, postOEMs } = require('../controllers/oemSpec.controller');

const oemSpecRouter = express.Router();

oemSpecRouter.route("/")
     // Get all OEM-specs data
     .get(getAllOems)

     // post OEM-spec data;
     .post(postOEMs)


module.exports = { oemSpecRouter };