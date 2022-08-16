import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080',
        // "Access-Control-Allow-Methods": 'POST,GET,OPTIONS,PUT,DELETE',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});