class ShopController {
  constructor(shopService) {
    this.shopService = shopService;
  }

  async add(req, res) {
    const body = req.body;

    try {
      const addShop = await this.shopService.add(body);

      return res.sendStatus(201);
    } catch (err) {
      return res.json(err);
    }
  }

  async get(req, res) {
    const shops = await this.shopService.get();

    return res.json(shops);
  }

  async getById(req, res) {
    const id = req.params.id;

    if (id) {
      try {
        const getShop = await this.shopService.getById(id);

        if (!getShop) {
          return res.json({
            error: true,
            message: "Not found"
          });
        }

        return res.json({
          error: false,
          data: getShop
        });
      } catch (err) {
        return res.json({
          error: true,
          data: err
        });
      }
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = ShopController;
