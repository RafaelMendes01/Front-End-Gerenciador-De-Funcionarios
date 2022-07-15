import {http} from './appConfig';

export default{
    loginUser: (data: any) => {
        return http.post('login', data);
    },
    ListUsers: () =>{
        return http.get('funcionarios')
    }
}