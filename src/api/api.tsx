import axios from "axios";

const api=axios.create({
    baseURL:"https://backend-simpson.onrender.com/api/characters"
});
export default api;