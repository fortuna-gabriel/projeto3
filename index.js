const express = require("express");
const app = express();

function concatenaPalavras(array){
    let l = array.length;
    let resultado = array[0];
    for (i=1; i<l; i++){
      resultado = resultado.concat(' ')
      resultado = resultado.concat(array[i])
    }
    return resultado;
  }

  app.get("/concatenaPalavras",(req,res)=>{
      const parametros = req.query.array;
      console.log(req.query.array);
    
      const array = concatenaPalavras(parametros);
      res.send(`${array}`);

  })

app.listen(3413, function(req,res){
  console.log("teste servidor");
})