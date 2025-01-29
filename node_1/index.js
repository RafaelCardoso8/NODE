const express = require("express")

const servidor = express()

//rotas

servidor.get("/Cavaleiro", (resquest ,response) => {
    console.log(resquest.query.ordem)
    return response.send("Saudações Cavaleiro!")
})

servidor.get("/Mago", (resquest ,response) => {
    return response.send("Saudações Mago!")
})


servidor.get("/Arqueiro", (resquest ,response) => {
    return response.send("Saudações Arqueiro!")
})


servidor.listen(3000)