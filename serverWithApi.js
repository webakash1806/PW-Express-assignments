const http = require('http')

const men = [
    { id: 1, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'M' },
    { id: 2, name: 'Shirt', brand: 'ABC', price: '500', Size: 'L' },
    { id: 3, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'M' },
    { id: 4, name: 'Jeans', brand: 'ABC', price: '500', Size: '38' },
    { id: 5, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'M' },
    { id: 6, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'M' },
    { id: 7, name: 'Shirt', brand: 'ABC', price: '500', Size: 'L' },
    { id: 8, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'M' },
    { id: 9, name: 'Jeans', brand: 'ABC', price: '500', Size: '38' },
    { id: 10, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'M' }
]

const women = [
    { id: 1, name: 'T-Shirt', brand: 'ABC', price: '700', Size: 'S' },
    { id: 2, name: 'Top', brand: 'ABC', price: '800', Size: 'M' },
    { id: 3, name: 'T-Shirt', brand: 'ABC', price: '600', Size: 'S' },
    { id: 4, name: 'Jeans', brand: 'ABC', price: '1200', Size: '38' },
    { id: 5, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'S' },
    { id: 6, name: 'T-Shirt', brand: 'ABC', price: '700', Size: 'S' },
    { id: 7, name: 'Top', brand: 'ABC', price: '800', Size: 'M' },
    { id: 8, name: 'T-Shirt', brand: 'ABC', price: '600', Size: 'S' },
    { id: 9, name: 'Jeans', brand: 'ABC', price: '1200', Size: '38' },
    { id: 10, name: 'T-Shirt', brand: 'ABC', price: '500', Size: 'S' }
]

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.write("Welcome to Men & Women Dummy Data")
        res.end()
    }
    else if (req.url === '/men') {
        res.statusCode = 200
        res.end(JSON.stringify(men))
    }
    else if (req.url === '/women') {
        res.statusCode = 200
        res.end(JSON.stringify(women))
    }
    else if (req.url === '/other') {
        res.statusCode = 500
        res.write("page not found")
        res.end()
    }
    else {
        res.statusCode = 500
        res.end("Page is not available")
    }
})

const PORT = 4002

server.listen(PORT, () => {
    console.log("Server created Succefully on PORT no." + PORT)
})