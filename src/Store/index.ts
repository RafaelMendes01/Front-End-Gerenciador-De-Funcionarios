import { createStore } from 'vuex'
import Services from '../services/appRequest'

const store = createStore({
    state: () => ({
        user:{
            email: '',
            password: ''
        },
        token: '',
    }),
    getters: {},
    mutations: {
        AuthSet(state, payload){
            state.token = payload.acess_token
            state.user = payload.user
        }
    },
    actions: {
        async handleSubmitLogin(context, user){
            await Services.loginUser({
                email: user.email,
                password: user.password
            })
            .then(res =>{
                if(res.data.acess_token){
                    localStorage.setItem('token', res.data.acess_token)
                    context.commit('authSet', res.data)

                    window.location.replace('/dashboard')
                }
            })
        }
    },

});

export default store;