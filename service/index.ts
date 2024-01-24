const fetch = (url: string, options?: any): Promise<any> => {
  const { public: env } = useRuntimeConfig()
  const token = useCookie('token')
  const headers = {
    // headers信息
    Authorization: `Bearer ${token.value}`
  }
  const baseUrl = env.VITE_API_URL
  const reqUrl = baseUrl + url
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options, headers })
      .then(({ data }: any) => {
        const value = data.value
        console.log(value)
        resolve(ref(data))
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default new (class Http {
  get(url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'get', params })
  }

  post(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'post', body })
  }

  put(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'delete', body })
  }
})()
