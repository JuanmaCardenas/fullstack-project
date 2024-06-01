import { api } from "../configs/axios";
import { User } from '../types/userType';

export class userService {
    static async getUsers(orgId: number): Promise<User[]> {
        const response = await api.get(`/home/${orgId}`);
        return response.data;
    }

    static async updateUser(userId: number, userData: User): Promise<void> {
        await api.patch(`/user/editUser/${userId}`, userData);
    }
    
    static async createUser(userData: User): Promise<User> {
        const response = await api.post('/user', userData);
        return response.data;
    }

    static async deleteUser(userId: number): Promise<void> {
        await api.delete(`/home/${userId}`);
    }

    static async getUserById(userId:number){
        const response = await api.get(`/user/editUser/${userId}`)
        return response.data[0];
    }
}
