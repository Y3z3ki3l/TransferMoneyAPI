# TransferMoneyAPI
API to perform money transaction between two accounts

### Getting Started

```
This is an API for transfer money between two accounts. 
It's a Restful API and it's based on MVC design pattern 
and implements DAO layer approach for a better integration 
and best practice coding.
```

### Prerequisites

This API works with mongoose to persist data on a local database. So you must setting up a local MongoDB database.

```
The database name has to be: transfermoney-app-db.
```

Collections:
* accounts
* transactions

Note: All collections will be generated automatically by mongoose driver once an account and transaction was created.

### Running

For launch app just execute node following node command:

```    
~./TransferMoneyAPI$ node app.js
```


## Built With

* [Node.js](https://nodejs.org/es/) - The web back-end development environment used.
* [express](https://expressjs.com/es/) - Node framework.
* [bodry-parser](https://www.npmjs.com/package/body-parser) - Body and params, request-resposne parser dependency.
* [mongoose](https://mongoosejs.com/) - Used for object data modeling and generates databse queries.
* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - Used to autogenerate documentation (dependency).
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - Used to generate a Swagger UI documentation (dependency).

## Authors

* **Franz Ezequiel Muñoz Gutierrez** - *email* - (franzmunoz@gmail.com)