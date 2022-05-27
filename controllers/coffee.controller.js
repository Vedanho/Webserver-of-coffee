const Drink = require("../models/Drink.model");

module.exports.controllerCoffee = {
  getAll: (req, res) => {
    Drink.find({})
      .select("_id name price")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllInStock: (req, res) => {
    Drink.find({ stock: true })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getDrinkById: (req, res) => {
    Drink.findById(req.params.id).then((data) => {
        res.json(data);
      }).catch((e) => {
        res.json(e);
      });
  },
  addDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      caffeine: req.body.caffeine,
      size: req.body.size,
      description: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteDrink: (req, res) => {
    Drink.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Напиток удалён");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  patchDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      caffeine: req.body.caffeine,
      size: req.body.size,
      description: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
