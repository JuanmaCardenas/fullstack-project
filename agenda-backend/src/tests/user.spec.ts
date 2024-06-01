import { Request, Response } from "express";
import { createUser, getUserById, updateUser } from "../controllers/userController";
import { getAvalibleNumber } from "../controllers/phoneController";

describe('/user FUNCTIONS', () =>{
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject;

    test('/POST, organisation does not exists, should respond with 500 status code', async () => {
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
        await createUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('/POST should respond with 200 status code', async () => {
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
        await createUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('/GET, user does not exists, should respond with 404 status code', async () => {
        mockRequest = {
            params: {userId: "1000"}
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        await getUserById(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    
    test('/GET should respond with 200 status code', async () => {
        mockRequest = {
            params: {userId: "80"}
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        await getUserById(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('/PATCH, userId does not exists, should respond with 404 status code', async () => {
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
        await updateUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('/PATCH should respond with 200 status code', async () => {
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
        await updateUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    });
});