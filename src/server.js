const express = require("express");
const body = require("body-parser");
const cors = require('cors')
const app = express();


app.use(cors())
app.use(body.json())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/lista' , (req,res) =>{
    mockLista = [
        {
            id:1 , nome:"Lu", email:'lu@gmail.com'
        },
        {
            id:2 , nome:"Belem", email:'belem@gmail.com'
        }
        ]
    res.json(mockLista)
})


app.listen(process.env.PORT || 4008)