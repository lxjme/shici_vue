import axios from 'axios'

// 请求拦截，加入header校验
axios.interceptors.request.use(function (config) {
  // let reg     = /^http(s)?:\/\/(.*?)\//;
  // let url     = reg.exec(config.url)[2]
  // let apiHost = [reg.exec(api.contentUrl)[2], reg.exec(api.userUrl)[2], reg.exec(api.solrUrl)[2], reg.exec(api.bizUrl)[2]]
  // // console.log(reg.exec(api.contentUrl)[2],reg.exec(api.userUrl)[2],reg.exec(api.solrUrl)[2],url,apiHost.indexOf(url))
  // if (-1 === apiHost.indexOf(url)) {
  //   console.log('request return')
  //   return config
  // }
  // if ( 5000 == config.timeout && -1 !== config.url.indexOf('upload')) {
  //   config.timeout = 30000
  // }

  config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

let promisePost = function (url, param) {
  let config = {
    transformRequest: [function (data) {
      // 重新请求补丁
      if (typeof data === 'string') {
        return data
      }
      let ret = ''
      for (let it in data) {
        if (data[it] !== null && data[it] !== 'null' && data[it] !== 'undefined' && data[it] !== undefined) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
      }
      return ret
    }]
  }
  return new Promise((resolve, reject) => {
    axios.post(url, param, config).then(res => {
      if (res.data.status !== 1) {
        console.log('获取失败')
      }
      resolve(res.data)
    }).finally(() => {
      console.log('最后')
    })
  })
}

axios.promisePost = promisePost

export default axios
