const express = require("express");
const cors = require("cors");
const products = require('./routes/product.js');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(products);
app.use(express.urlencoded({ extended: true}));

app.listen(3000, () => console.log("Server started at port 3000"));
