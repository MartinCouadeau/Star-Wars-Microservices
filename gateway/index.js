const express = require("express")
const morgan = require("morgan")
require('dotenv').config();
const { PORT } = process.env;
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()
app.use(morgan("dev"))

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:4001"
  })
)

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://localhost:4002"
  })
)

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://localhost:4003"
  })
)

app.listen(PORT, () => {
  console.log(`Gateway on port ${PORT}`)
})