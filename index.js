const express = require('express')
const app = express()
const fs = require('fs')
app.get('/:col', (req, res) => {
    fs.readFile(`${req.params.col}/lb.json`, "utf8", (err, jsonString) => {
        res.send(jsonString)
    });
})
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
