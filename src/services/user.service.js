import http from '../http-common'

class UserDataService {
    getAll(name = '') {
        if (name) {
            return http.get("/users" + `?name=${name}`)
        }
        return http.get("/users")
    }
    get(id) {
        return http.get(`/users/${id}`)
    }
    create(data) {
        return http.post("/users", data)
    }
    update(id, data) {
        return http.put(`/users/${id}`, data)
    }
    delete(id) {
        return http.delete(`/users/${id}`)
    }
    deleteAll() {
        return http.delete('/users')
    }
    findByUsername(username) {
        return http.get(`/users?username=${username}`)
    }
}

export default new UserDataService();