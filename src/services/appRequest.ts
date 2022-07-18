import {http} from './appConfig';

export default{
    loginUser: (data: any) => {
        return http.post('login', data);
    },
    ListUsers: () =>{
        return http.get('funcionarios')
    },
    CreateUser: (data: any) =>{
        return http.post('funcionarios', data)
    },
    ListOne: (email: any) =>{
        return http.get(`funcionarios/${email}`)
    }
}