import axios from 'axios'

const api_url = 'http://127.0.0.1:3000/api'

const api = axios.create({
    baseURL: api_url
})

// Add request interceptor to attach the token to all requests
api.interceptors.request.use(
    (config) => {
        // Add a dummy token for development purposes
        // In production, this would come from login process
        const token = 'dev_token_for_testing';
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api

// import.meta.env.VITE_API_URL? import.meta.env.VITE_API_URL :