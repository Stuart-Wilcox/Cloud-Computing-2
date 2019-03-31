# Installation
Create a `.env` file with the following:

```
DB_HOST=cluster0-shard-00-00-83uwo.mongodb.net:27017,cluster0-shard-00-01-83uwo.mongodb.net:27017,cluster0-shard-00-02-83uwo.mongodb.net:27017
DB_USER=stu
DB_PASSWORD=mySuperSpecialPassword123
LOG_FILE=usage.log
```

Then run:
```
npm i
npm run start
```