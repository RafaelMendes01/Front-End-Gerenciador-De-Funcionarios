import { createStore } from 'vuex'
import Services from '../services/appRequest'

const store = createStore({
    state: () => ({
        user: {
            nome: '',
            email: '',
            password: '',
            role: ''
        },
        token: '',
    }),
    getters: {},
    mutations: {
        AuthSet(state, payload) {
            state.token = payload.access_token
            state.user = payload.user
        }
    },
    actions: {
        async handleSubmitLogin(context, user) {
            await Services.loginUser({
                email: user.email,
                password: user.password
            })
                .then(res => {
                    if (res.data.access_token) {
                        localStorage.setItem('token', res.data.access_token)
                        context.commit('authSet', res.data)
                        window.location.replace('/dashboard')
                    }
                })
        },
    },
});

export default store;