# E-Commerce

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a project to implement GET, POST, PUT and DELETE requests for an API. 

## Table of contents

- [Installation](#Insallation)
- [Demonstration](#Demonstration)
- [Usage](#Usage)
- [Contribution](#Contributing)
- [Test](#Test)
- [Questions](#Questions)

## Installation

npm i
- [dotenv](https://www.npmjs.com/package/dotenv) - Version 8.2.0
- [express](https://www.npmjs.com/package/express) - Version 4.17.1
- [mysql2](https://www.npmjs.com/package/mysql2) - Version 2.1.0
- [sequelize](https://www.npmjs.com/package/sequelize) - Version 5.21.7

## Demonstration

I have recorded a demonstration video of this tool being run in the command line and the Insomnia tool to test the routes.
Walkthrough Video: https://drive.google.com/file/d/167bveZEot6NNBjhkurOw8yu9S6AW6pfQ/view?usp=share_link

## Usage

To use this application, navigate to the directory of your project and install the required dependencies. From there, you will need to select the database by logging into mysql2. `mysql -u root -p` in your command line will prompt you to log into your sql account. 

- SOURCE the schema file and then ensure to use the database
- Then quit from the sql terminal
- Then type `npm run seed` to allow the database to be seeded
- After the database is seeded, type `npm run watch` to initialize nodemon to keep the server running
- From there, you can then make API requests using the Insomnia tool by `http://localhost:3001/api/`


## Collaborators

- [Josh Minor](https://github.com/jminor90)

## Test

No unit tests were built for this application

## Questions

Have questions? Please feel free to reach out to me at:

GitHub Username: [Christoph551](https://github.com/Christoph551)

Email: [Email](mailto:christophersimmonds551@gmail.com)