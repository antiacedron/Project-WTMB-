const fs=require("fs") 
const CircularJSON = require ("circular-json")

module.exports = {
 save (data) { 
     //console.logo (data)
     fs.writeFileSync("data.json", CircularJSON.stringify(data)) 
},
load() {
    return CircularJSON.parse(fs.readFileSync("data.json"))
}
}  

     