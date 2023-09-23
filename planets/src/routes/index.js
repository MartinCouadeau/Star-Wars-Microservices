const { Router } = require("express")
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/planets", controllers.getPlanets)
router.get("/planets/:id", controllers.getOne)
router.post("/planets", middlewares.planetValidation ,controllers.createPlanet)
router.delete("/planets/:id", controllers.removePlanet)

module.exports = router