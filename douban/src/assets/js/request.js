import request from './use_interface'
export function login_res() {
    return request({
        url: "/login",
        method: "post",
        data: {
            username: "admin",
            password: "123456",
        },
    })
}
//获取轮播图数据
export function carousel_res() {
    return request({
        url: "/carousel",
        method: "get",
    })
}
//获取首页数据
export function home_res() {
    return request({
        url: "/home",
        method: "get",
    })
}
//正在上映
export function movie_now() {
    return request({
        url: "/movie_now",
        method: "get",
    })
}

//等待上映
export function movie_future() {
    return request({
        url: "/movie_future",
        method: "get",
    })
}
//小组
export function group() {
    return request({
        url: "/group",
        method: "get",
    })
}