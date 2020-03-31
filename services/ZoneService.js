const Zone = require("../models/Zone");

class ZoneService {
  add(data) {
    const name = data.name;

    const newZone = new Zone({ name });

    return newZone.save();
  }

  get() {
    const query = Zone.find({}).exec();

    return query;
  }
}

module.exports = ZoneService;
