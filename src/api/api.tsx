import axios from "axios";

const api=axios.create({
    baseURL:"https://backend-simpson.onrender.com/api/"
});
export default api;