# Curso-NodeJS
# Proyecto con NodeJS utilizando Express

Api Rest que describe funcionamiento de un hospital.
Solamente el usuario Admin puede acceder a los datos de todos los pacientes, medicos y usuarios, así como de crear dichas entidades. Cada paciente, médico y usuario solamente pueden ver datos propios.

## Para ejecutar el proyecto

```bash
npm install
npm start
npm run db:seed
```

## Carga de Datos Inicial
npx sequelize-cli db:seed:all

## Postman
https://www.getpostman.com/collections/1ad75bb963cd2c120c9c

## API Documentation 
https://documenter.getpostman.com/view/18820804/2s8YzP35hA

---
## Dependencias utilizadas en el proyecto

- [express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)


