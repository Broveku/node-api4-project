require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())


server.get('/api/users', (req, res)=>{
    res.json({users:{
            name: 'Jordan',
            password: 'FakePassword',
    }})
})


server.use('*', (req, res, )=>{
    res.send('<h1>Hello, gamers!</h>')
})

server.use((err, req, res, next)=>{   //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})