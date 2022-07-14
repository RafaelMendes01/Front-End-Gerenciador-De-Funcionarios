import {http} from './appConfig';

export default{
    loginUser: (data) => {
        return http.post('/login', data);
    }
}