import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

    // Add interceptors to handle requests and responses
api.interceptors.response.use(
    response => response,
    async error => {
        if (error.response.status === 401) {
            try {
                await axios.post('api/user/refresh', {}, {
                    withCredentials: true,
                });
                return api.request(error.config);
            } catch (error) {
                window.location.href = '/';
            }
        }
        return Promise.reject(error);
    }
);

export default api;