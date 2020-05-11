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

Note: All collections will be generated automatically by mongoose driver once an account and transaction was created.

### Running

For launch app just execute node following node command:

```    
~./TransferMoneyAPI$ node app.js
```


## Built With

* [Node.js](https://nodejs.org/es/) - The web back-end development environment used.
* [express](https://maven.apache.org/) - Node framework.
* [bodry-parser](https://rometools.github.io/rome/) - Body and params, request-resposne parser dependency.
* [mongoose](https://rometools.github.io/rome/) - Used for object data modeling and generates databse queries.
* [swagger-jsdoc](https://rometools.github.io/rome/) - Used to autogenerate documentation.
* [swagger-ui-express](https://rometools.github.io/rome/) - Used to generate a Swagger UI documentation.

## Authors

* **Franz Ezequiel Muñoz Gutierrez** - *email* - (franzmunoz@gmail.com)