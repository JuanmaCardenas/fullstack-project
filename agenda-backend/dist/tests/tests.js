"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app"); // Asegúrate de importar la clase App correctamente
const supertest_1 = __importDefault(require("supertest"));
const app = new app_1.App();
const server = app.app.listen(); // Obtén el servidor subyacente de la aplicación Express
// Usa el servidor para crear una instancia de supertest
const request = (0, supertest_1.default)(server);
// Ahora puedes usar 'request' para hacer solicitudes HTTP a tu aplicación Express
// Por ejemplo:
request.get('/users').expect(200);
