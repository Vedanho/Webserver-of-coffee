const { Router } = require('express')

const router = Router()

const { controllerCoffee } = require('../controllers/coffee.controller')

router.get('/coffee', controllerCoffee.getAll)
router.get('/drinks/in-stock', controllerCoffee.getAllInStock)
router.get('/drinks/:id', controllerCoffee.getDrinkById)
router.post('/drinks', controllerCoffee.addDrink)
router.delete('/drinks/:id', controllerCoffee.deleteDrink)
router.patch('/drinks/:id',controllerCoffee.patchDrink)

module.exports = router