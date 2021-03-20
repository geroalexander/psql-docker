# Creating the PSQL DB in docker

## Install docker

[Install docker for mac](https://docs.docker.com/docker-for-mac/install/)

This comes with the docker engine and docker-compose CLI, no way around it for mac

## Check the brew services which are running and stop psql

In your terminal execute:
`brew services list`

If postgressql is running, execute:
`brew services stop postgresql`

## Test the connection with your computer

- clone this repo
- install dependencies
- IN LIBRAI REPO WE WILL CREATE A .ENV FILE WITH DB CREDENTIALS
- in the root folder run: `docker-compose up -d`
- this will build the docker image and create our DB from the .yml file

This might take a miniute download the postgres image etc etc

Check that the database is running
`docker-compose ps`

Start the express server
Execute `nodemon` or `node index.js`

## Hopefully the connection is successful 🥳

### More commands

- To stop the DB execute: `docker-compose stop`
- This will just stop the service and not destory the database

### DO NOT

- if you run `docker-compose down`, the DB will be destroyed which we definitely do not want!!!
