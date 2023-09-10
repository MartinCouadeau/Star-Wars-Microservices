const server = require("./src/server")

const PORT = 4003

server.listen(PORT, () => {
  console.log(`Character service is running on port ${PORT}`)
}) 