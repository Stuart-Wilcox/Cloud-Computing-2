const mongoose = require('mongoose');
const host = process.env.DB_HOST;
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

// connection string => mongodb+srv://stu:<PASSWORD>@cluster0-83uwo.mongodb.net/test?retryWrites=true
// mongodb://stu:<PASSWORD>@cluster0-shard-00-00-83uwo.mongodb.net:27017,cluster0-shard-00-01-83uwo.mongodb.net:27017,cluster0-shard-00-02-83uwo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
let connectionString = `mongodb://${user}:${password}@${host}/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = mongoose;
