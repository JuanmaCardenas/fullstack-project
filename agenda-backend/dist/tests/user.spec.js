"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
describe('/user FUNCTIONS', () => {
    let mockRequest;
    let mockResponse;
    let responseObject;
    test('/POST, organisation does not exists, should respond with 500 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        mockRequest = {
            body: {
                "name": "Juan",
                "surname": "Gomez",
                "org_id": 4
            }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        yield (0, userController_1.createUser)(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    test('/POST should respond with 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        mockRequest = {
            body: {
                "name": "Juan",
                "surname": "Gomez",
                "org_id": 2
            }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        yield (0, userController_1.createUser)(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    test('/GET, user does not exists, should respond with 404 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        mockRequest = {
            params: { userId: "1000" }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        yield (0, userController_1.getUserById)(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    test('/GET should respond with 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        mockRequest = {
            params: { userId: "80" }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        yield (0, userController_1.getUserById)(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    test('/PATCH, userId does not exists, should respond with 404 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        mockRequest = {
            body: {
                "iduser": 10000,
                "name": "Juan",
                "surname": "Gomez",
                "org_id": 4
            }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        yield (0, userController_1.updateUser)(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    test('/PATCH should respond with 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        mockRequest = {
            body: {
                "iduser": 80,
                "name": "Juan",
                "surname": "Gomez",
                "org_id": 2
            }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        yield (0, userController_1.updateUser)(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
});
