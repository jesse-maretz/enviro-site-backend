const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv').config()

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

app.set("port", process.env.PORT || 6000);

app.listen(app.get('port'), () => {
  console.log(`Listening on Port ${app.get('port')}`);
});