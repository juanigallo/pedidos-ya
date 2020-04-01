const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    freeShipping: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      required: true
    },
    days: {},
    paymentMethods: []
    // reviews: {
    //   average: {
    //     type: Number,
    //   },
    //   comments: []
    // },
    // products: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Shop", shopSchema);
