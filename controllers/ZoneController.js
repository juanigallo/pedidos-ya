class ZoneController {
  constructor(zoneService) {
    this.zoneService = zoneService;
  }

  async add(req, res) {
    const body = req.body;

    if (body && body.name) {
      const addZone = await this.zoneService.add(body);

      return res.sendStatus(201);
    } else {
      return res.sendStatus(400);
    }
  }

  async get(req, res) {
    const getZones = await this.zoneService.get();

    return res.json(getZones);
  }
}

module.exports = ZoneController;
