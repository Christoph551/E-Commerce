# E-Commerce

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a project to implement GET, POST, PUT and DELETE requests for an API. 

## Table of contents

- [Installation](#Insallation)
- [Deployment](#Deployment)
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

## Deployment

https://github.com/Christoph551/E-Commerce

## Usage

To use this application, navigate to the directory of your project and install the required dependencies. From there, you will need to select the database by logging into mysql2. `mysql -u root -p` in your command line will prompt you to log into your sql account. 

- SOURCE the schema file and then ensure to use the database
- Then quit from the sql terminal
- Then type `node seeds/index.js` to allow the database to be seeded
- After the database is seeded, type `node server` to turn the server on
- From there, you can then make API requests using the Insomnia tool or by `http://localhost:3001/api/`

I used the Insomnia tool in order to demonstrate making the API requests. A link to that walkthrough video can be found [here](https://drive.google.com/file/d/1wVoWQOtGp7qpjpL5nxG_F6zOy8B_R3b8/view?usp=share_link)

## Collaborators

- [Josh Minor](https://github.com/jminor90)

## Test

No unit tests were built for this application

## Questions

Have questions? Please feel free to reach out to me at:

GitHub Username: [Christoph551](https://github.com/Christoph551)

Email: [Email](mailto:christophersimmonds551@gmail.com)