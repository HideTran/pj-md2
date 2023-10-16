import axios from "axios"

export default {
    register: async function (data) {
        return await axios.post(import.meta.env.VITE_SERVER_HOST + "users", data)
    },
    findByUserName: async function (userName) {
        return await axios.get(import.meta.env.VITE_SERVER_HOST + `users` + `?userName=${userName}`)
    }
}