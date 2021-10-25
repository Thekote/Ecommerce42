const {Client} = require('pg');

const client = new Client ({
    host: "localhost",
    user: "postgres", 
    port: "5432",
    password: "apple",
    database: "ecommerce42"
});

module.exports = client;