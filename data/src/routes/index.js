const { Router } = require("express")
const middlewares = require("../middlewares")
const controllers = require("../controllers")

const router = Router()


router.get("/:model", middlewares.validateModel, controllers.getAll)

router.get("/:model/:id", middlewares.validateModel, controllers.getById)

router.post("/:model", middlewares.validateModel, controllers.insert)

router.delete("/:model/:id", middlewares.validateModel, controllers.delete)


module.exports = router