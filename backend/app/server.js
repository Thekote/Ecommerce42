const sequelize = require('./config/db.config') 
const express = require("express");
const cors = require("cors");

const app = express();


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(8080, () => {
    console.log("Server started at port 8080");
})

sequelize.authenticate().then(console.log("Connected to db"));
