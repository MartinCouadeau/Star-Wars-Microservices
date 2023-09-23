const { Router } = require("express")
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router()


router.get("/characters", controllers.getCharacters)
router.get("/characters/:id", controllers.getOne)
router.post("/characters", middlewares.characterValidation, controllers.createCharacter)
router.delete("/characters/:id", controllers.removeCharacter)

module.exports = router