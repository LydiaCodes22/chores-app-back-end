# chores-app-back-end
The back-end for the Bish Bash Dosh chore management application: https://github.com/LydiaCodes22/Chores-App/tree/main/chores-app. \
This API enables the user to run simple CRUD operations on a database to manage the user and chore data for the application. 

## Technologies
This uses express.js to create a simple serve and the API is built from there.

## Set up
You may fork and then clone this repository to get access locally. \
You will need a docker container running MySQL. \
You will need to set up a .env file and a .env.test file with your own details for the database based on the template below. \
Run 'npm install' to install the dependencies. \
Run npm start to start the server.

## .env template
 DB_PASSWORD= \
 DB_NAME= \
 DB_USER= \
 DB_HOST= \
 DB_PORT= \
 PORT=
 
 ## Future Development
 Swagger documentation. \
 Endpoints to allow the management of the users virtual balances. \
 Routing.
