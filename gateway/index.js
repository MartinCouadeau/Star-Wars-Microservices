const express = require("express")
const morgan = require("morgan")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()
app.use(morgan("dev"))

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:4001",
    changeOrigin: true
  })
)

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:4002",
    changeOrigin: true
  })
)

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:4003",
    changeOrigin: true
  })
)

app.listen(4000, () => {
  console.log(`Gateway on port ${4000}`)
})