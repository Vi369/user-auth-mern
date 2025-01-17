﻿# User Authentication using MERN

This is a full-stack authentication project that provides user registration, login, and get user details functionality. It is built using HTML CSS JAVASCRIPT, Express, and MongoDB.

## Technologies used

* Fronend: Pure HTML CSS for building user interface and Javascript for page manipulation and api handle
* Express : node.js framework for creating the server
* MongoDB: NOsql database for storing and  manging user data

## Key features 
* User Registration: Allows users to create an account by providing their full-Name, username,email, and password.
* User Login: Allows registered users to log in with their username and password.
* User profile details: Allows logged-in users to show their username email and bio data. 

## modules Utilized

* Mongoose: MongoDB object modeling library for creating whole model structure for application 
* cors: Cross-Origin Resource Sharing allows to set origin to communication between client-server
* Cookie-parser: Middleware for parsing cookies in the server
* dotenv: for management of environment variable
* email-validator: library for email validation
* bcrypt: library for hassing the password
* jsonWebToken: JWT library for authentication
* nodemon: Development dependency for automatically restaring the server during development 

## Configuration

* PORT: set the PORT number.
* MONGO_URI: MongoDB connection string
* ACCESS_TOKEN_SECRET: Secret key for JWT token generation
* CORS_ORIGIN: URL of the client-side application (MOST IMPORTAND)

## Usage
* Open the client-side application in your web browser: http://localhost:5501 make sure to change local host folders and url according to you
* change directory to backend folder and **npm install** after that start the server

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
