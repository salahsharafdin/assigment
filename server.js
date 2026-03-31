const cors = require('cors')
const express = require('express')
const productsRouter = require('./products')
const app = express()

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))


app.use(express.json())

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.send('Hello from Express')
})

app.get('/about', (req, res) => {
    res.send('this is the about page')
})

app.get('/contact', (req, res) => {
    res.send('this is the contact  page')
})


app.get('/message', (req, res) => {
    res.json({ message: 'Hello from your express backend 😊' })
})

app.post('/message', (req, res) => {
    const {name, message} = req.body

    console.log('New Message:', name, message);
    

    res.json({message: 'thank you for your message'})

})

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.listen(3000, () => {
    console.log('server is runnig');
})