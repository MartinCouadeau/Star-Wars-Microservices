const { Router } = require("express")
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/films", controllers.getFilms)
router.get("/films/:id", controllers.getOne)
router.post("/films", middlewares.filmValidation, controllers.createFilm)
router.delete("/films/:id", controllers.removeFilm)

module.exports = router