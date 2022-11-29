const globalConstant = require("../../const/globalConstant")

module.exports = {
  "development": {
    "username": globalConstant.DB_USERNAME,
    "password": globalConstant.DB_PASSWORD,
    "database": globalConstant.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging":false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
