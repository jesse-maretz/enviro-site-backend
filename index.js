const express = require('express')
const cors = require('cors')

const app = express()

//Middleware
app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.redirect("/documentation")
})

app.get("/documentation", (req, res) => {
    res.sendFile(path.join(__dirname + '/documentation.html'), (err)=> {
      if (err) console.log(err);
    });
  });

app.use('/footprint', require("./routes/footprintRoutes"))



app.listen(process.env.PORT || 5000, () => {
    console.log('Server has started')
})

