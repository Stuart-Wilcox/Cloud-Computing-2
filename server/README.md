# Installation
Create a `.env` file with the following fields:

```
USAGE_HOST=127.0.0.1
USAGE_HOST_PORT=8000
USAGE_HOST=127.0.0.1
USAGE_PORT=8000
PORT=8080
DB_HOST=cluster0-shard-00-00-83uwo.mongodb.net:27017,cluster0-shard-00-01-83uwo.mongodb.net:27017,cluster0-shard-00-02-83uwo.mongodb.net:27017
DB_USER=stu
DB_PASSWORD=mySuperSpecialPassword123
```

`USAGE_HOST` and `USAGE_PORT` refer to the cloud usage monitor host and port. Modify these
appropriately.

Then run
```
npm i
npm run start
```