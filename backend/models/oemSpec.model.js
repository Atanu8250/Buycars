const mongoose = require("mongoose");

const oemSpecSchema = mongoose.Schema({
     model: {
          type: String,
          required: true
     },
     year: {
          type: Number,
          required: true
     },
     listPrice: {
          type: Number,
          required: true
     },
     colors: {
          type: [String]
     },
     mileage: {
          type: Number,
          required: true
     },
     power: {
          type: Number,
          required: true
     },
     maxSpeed: {
          type: Number,
          required: true
     }
}, { versionKey: false, timestamps: true });

const oemSpecModel = mongoose.model('oemSpec', oemSpecSchema);

module.exports = { oemSpecModel };
