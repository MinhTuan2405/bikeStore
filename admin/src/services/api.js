import axios from 'axios'

const api_url = 'http://127.0.0.1:3000/api'

const api = axios.create ({
    baseURL:  api_url
})

export default api

// import.meta.env.VITE_API_URL? import.meta.env.VITE_API_URL :