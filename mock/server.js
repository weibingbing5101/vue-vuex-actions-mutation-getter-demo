let http = require('http');
let fs = require('fs');
let url = require('url');

function readData(url, cbfn) {
    fs.readFile(url, 'utf8', (err, data) => {
        if (err) {
            console.log(`读取文件 ${url}出错，请检查文件是否为空数组，或是上次操作存储的数据是否为string或buffer`);
        } else {
            let datas = data && data.length ? JSON.parse(data) : [];
            cbfn && cbfn(datas.length ? datas : []);
        }
    });
};

function writeData(url, writeDatas, cbfn) {
    fs.writeFile(url, JSON.stringify(writeDatas), (err, data) => {
        if (err) {
            console.log(`写入文件${url}出错,操作存储的数据是否为string或buffer`);
        }
        cbfn && cbfn();
    });
};

function getReqData(req, cbfn) {
    let str = '';
    req.on('data', (data) => {
        str += data;
    });
    req.on('end', () => {
        cbfn && cbfn(JSON.parse(str));
    });
};






http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);

    if (pathname == '/api/getNewsList') {
        readData('./news.json', (dataObj) => {
            res.end(JSON.stringify(dataObj));
        });
        return;
    }

    // 获取轮播图
    if (pathname == '/api/getSliderImg') {
        readData('./sliderImgs.json', (dataObj) => {
            res.end(JSON.stringify(dataObj));
        });
        return;
    }

    // 获取点赞列表
    if (pathname == '/api/getSaveNews') {
        readData('./saveNews.json', (dataObj) => {
            res.end(JSON.stringify(dataObj));
        });
        return;
    }

    // 点赞请求
    if (pathname == '/api/saveNews') {
        getReqData(req, (reqDataObj) => {
            readData('./saveNews.json', (dataObj) => {
                if (!dataObj.some((item) => item.id == reqDataObj.id)) {
                    dataObj.push(reqDataObj);
                }

                writeData('./saveNews.json', dataObj, () => {
                    res.end(JSON.stringify(dataObj));
                });

            });
        });
        return;
    }

    // 取消点赞
    if (pathname == '/api/removeSaveNew') {
        getReqData(req, (reqDataObj) => {
            readData('./saveNews.json', (dataObj) => {

                let newArr = dataObj.filter((item) => {
                    return reqDataObj.id != item.id;
                });

                writeData('./saveNews.json', newArr, () => {
                    res.end(JSON.stringify(newArr));
                });

            });
        });
        return;
    }


    // 获取热点新闻
    if (pathname == '/api/getHotNews') {
        readData('./news.json', (dataObj) => {
            let newArr = dataObj.slice(0, 2);
            res.end(JSON.stringify(newArr));
        });
        return;
    }

    if (pathname == '/api/addNews') {
        getReqData(req, (reqDataObj) => {
            readData('./news.json', (dataObj) => {
                reqDataObj.id = dataObj && dataObj.length ? dataObj[dataObj.length - 1].id + 1 : 1;
                dataObj.push(reqDataObj);
                writeData('./news.json', dataObj, () => {
                    res.end(JSON.stringify(dataObj));
                });

            });
        });
        return;
    }


}).listen(3000, (err) => {
    let info = '监听成功';
    if (err) {
        info = err;
    }
    console.log(info);
});
