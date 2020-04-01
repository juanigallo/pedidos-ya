const Shop = require("../models/Shop");

class ShopService {
  add(data) {
    const newShop = new Shop(data);

    return newShop.save();
  }

  get() {
    const query = Shop.find({}).exec();

    return query;
  }

  getById(id) {
    const query = Shop.findOne({ _id: id }).exec();

    return query;
  }
}

module.exports = ShopService;
