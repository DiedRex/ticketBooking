import axios from 'axios'

const HTTP = axios.create({
  'baseURL': 'http://localhost:3000',
  'timeout': 5000,
  'crossDomain': true,
  'withCredentials': true,
  'responseType': 'json',
  'Cache-Control': 'max-age=60'
})

// request拦截器
HTTP.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// response拦截器
HTTP.interceptors.response.use(function (response) {
// Do something with response data
  const data = response.data
  if (response.status !== 200) {
    console.log('请求失败')
    return ''
  }
  if (data.length === 0) {
    return ''
  }
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default HTTP
