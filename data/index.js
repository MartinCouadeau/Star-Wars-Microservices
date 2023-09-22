const server = require("./src/server")
const { Character, Film, Planet } = require("./src/database")

//Planet.list().then((res) => console.log(res))
//Planet.get(5).then((res) => console.log(res))
/*Planet.insert({
  _id: "201",
  name: "jorge vega",
  birth_year: "1991",
  gender: "asdasd"
}).then((res) => console.log(res))*/

server.listen(4004,() => {
  console.log("Database service on port 4004")
})