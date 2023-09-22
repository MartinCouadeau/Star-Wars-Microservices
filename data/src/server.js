const express = require("express")
const morgan = require('morgan');
const router = require("./routes")

const server = express()

server.use(express.json())
server.use(morgan("dev"))
server.use(router)

server.use("*", (req, res) => {
  res.status(404).send("Not Found")
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

server.use(require("./routes"))

module.exports = server