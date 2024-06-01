import { api } from "../configs/axios";

export class numberService{
    static async getAvalibleNumber(){
        const response = await api.get("/user")
        return response.data
    }

}

