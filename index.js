require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())


server.get('/api/users', (req, res)=>{
    res.json({users:{
            name: 'Jordan',
            password: 'FakePassword',
    }})
})



server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})