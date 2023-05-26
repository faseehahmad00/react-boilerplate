import axios from 'axios'

/**
 * configuring axios instance
 * add default options for axios here
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

/**
 * Sending token with each request
 */
axiosInstance.interceptors.request.use((config) => {

  //use below line if you want to send token or any other default param in url query
  config.params = { ...config.params, token: localStorage.getItem('access_token') }

  //use below line if you want to send token or any other default param in request body
  config.data = { ...config.data, token: localStorage.getItem('access_token') }

  return config
})

axiosInstance.interceptors.response.use(r => r, (error) => {
  if (error?.response?.status === 403) {
    //do something if user has unauthorized
  }
  throw error
})

export default axiosInstance
