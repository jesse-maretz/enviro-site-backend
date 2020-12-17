const express = require('express')
const cors = require('cors')

const app = express()

//Middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000", // <-- location of the react app we're connectiong to
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}))



app.use('/footprint', require("./routes/footprintRoutes"))



app.listen(process.env.PORT || 5000, () => {
    console.log('Server has started')
})

