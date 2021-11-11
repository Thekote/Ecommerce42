const cors = require("cors");

const app = require("./server/index.js");

const port = process.env.PORT || 3000;

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));
app.listen(port, () => console.log(`Server started at port: ${port}. `));


module.exports = app;
