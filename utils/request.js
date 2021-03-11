import axios from 'react-native-axios'
import Toast from 'react-native-easy-toast'
let instance = axios.create({
  baseURL: 'http://gateway.qa.i4cloud.cn:8080',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
  withCredentials:true
});

const showToast = (message)=>{
  console.log(message)
}

instance.interceptors.request.use(function (config) {
    // const secretKey = getSecretKey()
    // if (secretKey) { // 登录之后 store.getters.token
    //     config.headers['secret-key'] = secretKey
    // } else {
    //     config.headers['action-key'] = getExternalKey()
    // }
    return config
}, function (error) {
    return Promise.reject(error);
});
let  alert = false;
// 响应
instance.interceptors.response.use(response => {

    // 根据状态码做相应的事情
    const res = response.data
    if (res.code === 1 && res.showMsg === true) { // 成功
        showToast(res.message,1500);
    }
    if (res.code === -2 && res.showMsg === true) { // 错误
        showToast(res.message,3000);
    }
    if (res.code === 2) { // 警告
        showToast(res.message,3000);
    }
    if (res.code === 1003) { //  权限不足 的情况
        showToast('账号权限不足！',2500);
    }
    if (res.code === 1004 && !alert) { // 获取不到用户信息 或 登录错误
        alert = true
        showToast('登录失败！',2500);
    }
    console.log(res);
    return res
}, (error) => {
    showToast('出错了！请稍后再试！',5000);
    return Promise.reject(error);
})

export default instance