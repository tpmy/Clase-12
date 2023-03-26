import express from "express"

const app = express()

app.get('/personas' , (req, res) => {
    res.json({ ruta: 'personas' , urlParams: req.params, queryParams : req.query})
})

const server = app.listen(8080)