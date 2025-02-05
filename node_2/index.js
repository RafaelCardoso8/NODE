const express = require("express")

const app = express()

const usuarios = []

app.get("/usuarios", (request, response) => {
    return response.json({messagem: (usuarios)})

})

app.post("/usarios", (request, response) => {
    console.log(request)
    return response.json({OK: "Saudações!!"})


})


app.listen(3000)