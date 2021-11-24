const app = require("./server/index.js");

const port = process.env.PORT || 3005;



app.listen(port, () => console.log(`Server started at port: ${port}. `));


module.exports = app;
