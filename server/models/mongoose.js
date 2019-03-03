const mongoose = require('mongoose');
const host = 'cluster0-83uwo.mongodb.net';
const password = 'mySuperSpecialPassword123';

// connection string => mongodb+srv://stu:<PASSWORD>@cluster0-83uwo.mongodb.net/test?retryWrites=true
// mongodb://stu:<PASSWORD>@cluster0-shard-00-00-83uwo.mongodb.net:27017,cluster0-shard-00-01-83uwo.mongodb.net:27017,cluster0-shard-00-02-83uwo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
let connectionString = `mongodb://stu:${password}@cluster0-shard-00-00-83uwo.mongodb.net:27017,cluster0-shard-00-01-83uwo.mongodb.net:27017,cluster0-shard-00-02-83uwo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = mongoose;
