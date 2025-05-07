import express from 'express'

const product = express.Router ()

product.post ('/create', (req, res) => {
    res.send ("hello word")
})

export default product