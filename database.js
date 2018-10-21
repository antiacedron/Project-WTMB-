const fs = require("fs")
module.exports = { 
    save: function(data){
        //console.log 
        fs.writeFileSync("data.json",JSON.stringify(data)) 
      } 
    
} 
  

     