import axios from 'axios';

export function getSliderImg(data) {
    return getData('/api/getSliderImg', data, 'GET');
}

// 获取热点新闻
export function getHotNews(data) {
    return getData('/api/getHotNews', data, 'GET');
}


export function addNews(data) {
    return getData('/api/addNews', data, 'POST');
}

export function removeSaveNew(data) {
    return getData('/api/removeSaveNew', data, 'POST');
}



export function getSaveNews(data) {
    return getData('/api/getSaveNews', data, 'GET');
}

export function saveNews(data) {
    return getData('/api/saveNews', data, 'POST');
}


export function getNewsList(data) {
    return getData('/api/getNewsList', data, 'GET');
}


function getData(url, data, method, heder, ) {
    let options = {
        method: method || "POST",
        url: url
    };

    options.data = data || {}; // 前端传后台有是obj  axios自动转为str

    return new Promise((reslove, reject) => {
        axios(options).then((res) => {
            // 后台传来的res是str  axios自动转为obj
            if (res && res.status == 200) {
                reslove && reslove(res.data);
            } else {
                reject && reject(res.data);
                console.log('api/index.js-----请求失败');
            }
        })
    })
}
