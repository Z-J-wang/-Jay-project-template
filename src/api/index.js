import createInstance from './config'

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL

export default {
  getProduct(data = {}, axiosConfig, errorConfig) {
    const instance = createInstance(axiosConfig, errorConfig)

    return instance.get(API_BASE_URL + '/products', { params: data })
  },
}
