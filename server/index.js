const express = require('express')
const cors = require('cors')
//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Endpoints

const {getWishes, addWishes, deleteWish, rankWish} = require('./controller')

app.get('/wishes', getWishes)
app.post('/wishes', addWishes)
app.delete('/wishes/:id', deleteWish)
app.put('/wishes/:id', rankWish)


//App.listen
app.listen(4321, () => console.log('server running on 4321!'))
