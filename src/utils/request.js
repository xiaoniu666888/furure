import axios from 'axios'
// 封装axios
class XNRequest {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    request(options) {
        const { url } = options
        return new Promise((resolve, reject) => {
            axios.request({
                ...options,
                url: this.baseURL + url,
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
                console.error(err);
            })
        })
    }
    get(options) {
        return this.request({
            ...options,
            method: "get"
        })
    }
    post(options) {
        return this.request({
            ...options,
            method: "post"
        })
    }
}

export const xnRequest = new XNRequest("/api")