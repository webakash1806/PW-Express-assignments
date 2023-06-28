const express = require('express')
const app = express()

const PORT = 4005
const HOSTNAME = 'localhost'

app.get('/', (req, res) => {
    res.json({ msg: 'I am homepage' })
})

app.get('/about', (req, res) => {
    res.json({ msg: 'I am About Page' })
})

app.get('/contact', (req, res) => {
    res.json({ email: 'support@pwskills.com' })
})

app.listen(PORT, () => {
    console.log(`Server Created Successfully on ${HOSTNAME}:${PORT}`)
})