# clean-clean-bankAPP

# clean-bankAPP
A bank application demo that enables users to create a account, deposit ,withdraw, transer, check balance and apply for a loan.
# clean-bankAPP

[![Build Status](https://travis-ci.org/ajagunnamaruf/clean-bankAPP.svg?branch=develop)](https://travis-ci.org/ajagunnamaruf/clean-bankAPP)
[![Coverage Status](https://coveralls.io/repos/github/ajagunnamaruf/clean-bankAPP/badge.svg?branch=develop)](https://coveralls.io/github/ajagunnamaruf/clean-bankAPP?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/71169e218528ed943a7a/maintainability)](https://codeclimate.com/github/ajagunnamaruf/clean-bankAPP/maintainability)

## Application Features

A bank application demo that enables users to create an account, deposit ,withdraw, transer, check balance and apply for a loan.

<ul> 
<li> User can create an account(Basic Information- email, name, password)</li>
<li> User can fund their Account with Card or Bank Transfer.</li>
<li> User can send money to another User using their email.</li>
<li> User can add beneficiaries (bank to withdraw to).</li>
<li> User can only withdraw money to their Beneficiaries.</li>
<li> Use webhook only to confirm if transfer or funding is successful (checkout Ngrok to help out).</li>
<li> Writing tests for this is a plus</li>
</ul> 

## Technologies

### Backend

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [Sequelize](http://docs.sequelizejs.com/) Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
- [Mysql](https://www.mysql.com/) A powerful, open source object-relational database system.
- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Mocha](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [NodeJS](nodejs.org/en) for testing [Javascript](javascript.com) applications.

## Installation

- Install [NodeJS](http://nodejs.org/en) and [MySQL](https://github.com/mysqljs/mysql) on your computer
- Clone this repository
- Navigate to the directoty
- Install all depencies with ```npm install```
-  install ```mysql```
- Start the server by running ```npm start```

## Testing

- Create a test database of your choice by following the example in .env.sample file

## Contribution

- Fork the repository
- Make your contributions
- Write test cases for your contributions


## FAQ

* What language is used to build this application ?
  - The application (both front-end and back-end) is entirely built with javascript
* Is this an open-source project ?
  - Yes, Is an open-source project.
* Who can contribute ?
  - Anyone can contribute as long as you would follow the contribution guides outlined above
* Is the application hosted online ?
  - Yes, the application is hosted on heroku platform. You can always visit it via this link [https://clean-bankAPP-v3.herokuapp.com/](https://clean-bankAPP-v1.herokuapp.com/)
* Does the application have an API ?
  - Yes, The application has a well documented API that can be viewed via a link in the API documentation section above
* Is the application licensed ?
  - Yes, the application and its contents is under MIT license

## User template is available on

- [clean-bankAPP](https://code2031.github.io/clean-bankAPP)

## License and Copyright

&copy; Ajagunna Maruf

Licensed under the [MIT License](LICENSE).