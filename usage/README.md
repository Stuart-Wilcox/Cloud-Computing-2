# Installation
Create a `.env` file with the following:

```
DB_HOST=cluster0-shard-00-00-83uwo.mongodb.net:27017,cluster0-shard-00-01-83uwo.mongodb.net:27017,cluster0-shard-00-02-83uwo.mongodb.net:27017
DB_USER=stu
DB_PASSWORD=mySuperSpecialPassword123
LOG_FILE=usage.log
USAGE_PORT=8000
LOG_EMAIL=aszepess@uwo.ca
```

On the production server, replace the values with the appropriate values.

Then run:
```
npm i
npm run start
```

## Running the Email Script
```
node mail-log.js
```
This will immediately send an email to `LOG_EMAIL`.

## Running the Cloud Monitor Status Script
```
node check-service.js
```

This will run until it detects that the cloud monitor is down. Then it'll send an email to
`LOG_EMAIL`.