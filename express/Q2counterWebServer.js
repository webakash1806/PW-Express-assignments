const express = require('express')
const app = express()

let counter = 0

const PORT = 3005
const HOSTNAME = "localhost"

app.get('/', (req, res) => {
    res.json({ counter })
    res.statusCode = 200
})

app.get('/increment', (req, res) => {
    counter++
    res.json({ counter: counter })
    res.statusCode = 200
})

app.get('/decrement', (req, res) => {
    counter--
    res.json({ counter: counter })
    res.statusCode = 200
})

app.listen(PORT, () => {
    console.log(`Server Created Successfully on ${HOSTNAME}:${PORT}`)
})