"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const supertest_1 = __importDefault(require("supertest"));
const app = new app_1.App();
const server = app.app.listen();
describe('/home', () => {
    test('should respond with 200 status code', () => {
        const response = (0, supertest_1.default)(server).get('/home/1').send();
        expect(response);
    });
});
