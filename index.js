const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const userRoute = require('./routes/userRoutes')
app.use(bodyParser.urlencoded({ extended: false}))

userRoute(app)

app.get('/', (req, res) => res.send('Olá'))


app.listen(port, () => console.log('Api up and running on port: %s ', port))

