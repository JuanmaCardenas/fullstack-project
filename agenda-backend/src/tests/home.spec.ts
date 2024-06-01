import { Request, Response } from "express";
import { deleteUser, getUsers } from "../controllers/userController";

describe('/home FUNCTIONS', () =>{
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject;

    test('/GET should respond with 200 status code', async () => {
        mockRequest = {
            params: { orgId: '1' }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        await getUsers(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('/GET organisation doesnt exists should respond with 404 status code', async () => {
        mockRequest = {
            params: { orgId: '4' }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        await getUsers(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    test('/DELETE that doesnt exists should respond with 404 status code', async () => {
        mockRequest = {
            params: { userId: '1' }
        };
        mockResponse = {
            statusCode: 0,
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        };
        await deleteUser(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
    });


});
