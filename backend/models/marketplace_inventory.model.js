const mongoose = require("mongoose");

const marketplace_inventorySchema = mongoose.Schema({
     dealer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
          required: true,
          immutable: true
     },
     oemSpec: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'oemSpec',
          required: true,
          immutable: true
     },
     carImage: {
          type: String,
          required: true
     },
     odometer: {
          type: Number,
          required: true
     },
     majorScratches: {
          type: String,
          required: true
     },
     originalPaint: {
          type: Boolean,
          default: true
     },
     noOfAccidents: {
          type: Number,
          default: 0
     },
     noOfPreviousBuyers: {
          type: Number,
          default: 1
     },
     registrationPlace: {
          type: String,
          required: true
     }
}, { versionKey: false, timestamps: true });

const marketplace_inventoryModel = mongoose.model('marketplace_inventory', marketplace_inventorySchema);

module.exports = { marketplace_inventoryModel };

