import { http } from './appConfig';

export default {
    loginUser: (data: any) => {
        return http.post('login', data);
    },
    ListUsers: (token: any) => {
        return http.get('funcionarios', token)
    },
    CreateUser: (token: any, data: any) => {
        return http.post('funcionarios', data, token)
    },
    ListOne: (token: any, email: any) => {
        return http.get(`funcionarios/${email}`, token)
    },
    DeleteOne: (token: any, email: any) => {
        return http.delete(`funcionarios/${email}`, token)
    },
    UpdateOne: (token: any, email: any, data: any) => {
        return http.patch(`funcionarios/${email}`, data, token)
    }
}