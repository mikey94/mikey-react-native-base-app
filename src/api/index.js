import { ApiEndpoint, Method } from "./ApiConstants"

function postFormData(path, form, token) {
    var url = new URL(`${path}`, `${ApiEndpoint.BASE_URL}`)
    console.log("url", url)
    const basicHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    }
    return fetch(url, {
        method: Method.POST,
        headers: token ? { ...basicHeaders, "Authorization": token } : basicHeaders,
        body: form
    }).then((res)=> res.json())
    .catch((err)=> err)
}

function post(path, data, token) {
    var url = new URL(`${path}`, `${ApiEndpoint.BASE_URL}`)
    console.log("url", url)
    const basicHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: Method.POST,
        headers: token ? { ...basicHeaders, "Authorization": token } : basicHeaders,
        body: JSON.stringify(data)
    }).then((res)=> res.json())
    .catch((err)=> err)
}

function get(path, token) {
    var url = new URL(`${path}`, `${ApiEndpoint.BASE_URL}`)
    console.log("url", url)
    const basicHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: Method.GET,
        headers: token ? { ...basicHeaders, "Authorization": token } : basicHeaders
    }).then((res)=> res.json())
    .catch((err)=> err)
}

export default {
    post,
    get,
    postFormData
}