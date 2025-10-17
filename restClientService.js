const axios = require('axios');

class RestClientService {
    constructor() {
        this.BASE_URL = 'https://jsonplaceholder.typicode.com/users';
    }

    async getAllUsers() {
        const response = await axios.get(this.BASE_URL);
        return response.data;
    }

    async getUserById(id) {
        const response = await axios.get(`${this.BASE_URL}/${id}`);
        return response.data;
    }

    async createUser(user) {
        const response = await axios.post(this.BASE_URL, user);
        return response.data;
    }

    async updateUser(id, user) {
        await axios.put(`${this.BASE_URL}/${id}`, user);
    }

    async deleteUser(id) {
        await axios.delete(`${this.BASE_URL}/${id}`);
    }
}

module.exports = RestClientService;
