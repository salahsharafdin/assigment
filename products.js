const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'laptop', price: 1299 },
        { id: 2, name: 'mouse', price: 50 },
    ])
})

router.get('/special', (req,res) => {
    const specialProduct = {
        name: 'Coding2GO Js Course',
        price: 50
    }
    res.json(specialProduct)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const products = [
        { id: 1, name: 'laptop', price: 1299 },
        { id: 2, name: 'mouse', price: 50 }
    ]

    const requestedProduct = products.find((product) => product.id === id)

    res.json(requestedProduct)
})


router.post('/', (req,res) => {
    const { name, price } = req.body

    const newProduct = {
        name,
        price
    }
    console.log(newProduct);
    res.json({message: "New product added", product: newProduct})
    
})

module.exports = router