const { Buffer } = require('buffer')
const fs = require('fs')

fs.readFile("./assets/salsicha.jpg", (erro,buffer) =>{

    console.log("Imagem foi bufferizada")

    fs.writeFile("./assets/salsicha2.jpg",buffer,erro =>{
        console.log("imagem foi escrita")

    })
})