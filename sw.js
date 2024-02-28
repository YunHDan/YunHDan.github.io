/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/02/22/PairLIE论文阅读笔记/first.png","8e8c31b2682d16a5441dc0eaeeb9af68"],["/2024/02/22/PairLIE论文阅读笔记/index.html","a4ac1b6da827f43e60c8b01fe3e76a51"],["/2024/02/22/PairLIE论文阅读笔记/屏幕截图 2023-12-08 183747.png","94255ad7b713f0f20596942bdc71e6b6"],["/2024/02/22/test/index.html","f356a7eee13024cf84d9744af8e78054"],["/2024/02/23/注意力机制/index.html","e342d24bbed8da6a65540b3561c3df87"],["/2024/02/23/注意力机制/屏幕截图 2023-11-24 230449.png","ab1e5d725e7d8c529528828dbd40688e"],["/2024/02/23/注意力机制/屏幕截图 2023-11-24 230637.png","0c2d6039a6c11018e104aab58bd2353f"],["/2024/02/23/注意力机制/屏幕截图 2023-11-24 231509.png","af7b1fea497377095ba358652c633e54"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 200512.png","423efcac79264b22b5e360394bf3222e"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 201534.png","56902fb16ef4567f81d07d0361e4601f"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 202356.png","2e349e4815225bc5483cf4c24673de59"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 203428.png","e484f764a1f0d3288507cf9118df5f55"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 203513.png","6047689d5292cd6391b70361a021ae4d"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 205205.png","a6f623edac5af7df24e14554a80a1deb"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 212459.png","20fe7cc7b66dfe197a1df654c52d4604"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 212801.png","faa21246f14ca9028fac91270e4057fc"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 213911.png","9cfb5d61285da1a0872359153871273d"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 215156.png","3de714d668a2948db84daef4b0f05848"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 215304.png","b026c626921579863c29a5e57dbba72b"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 120038.png","65acbeb154344c89ad17ed37b374211a"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 151246.png","0b0cde352dbf33e8c0939874f6fbe4ee"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 160635.png","2b81a9d07c6a3a6784aba2e996999140"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 175302.png","049e65e810ccacb475b166b257e4778a"],["/2024/02/23/注意力机制/屏幕截图 2023-12-08 195010.png","88875a2b86f99a9bb07344750f33771c"],["/2024/02/24/EnlightenGAN论文精读笔记/index.html","b04446d4f20deafe90756f821ec82291"],["/2024/02/24/EnlightenGAN论文精读笔记/屏幕截图 2023-12-12 203151.png","906d3ed1ef8e5de5cb278a7791b3fdd5"],["/2024/02/24/Retinexformer论文精读笔记/index.html","5c5512c64fc3d7630c54f057e30ef9c1"],["/2024/02/24/Retinexformer论文精读笔记/屏幕截图 2024-02-04 161121.png","a343f36963335ff51a2c1c42b49cf4e8"],["/2024/02/27/公告/20240227.png","2f2380ade48f2d790856ab4e71f354e1"],["/2024/02/27/公告/index.html","92c28046368aea907c50d91653512f96"],["/2024/02/27/大二下整体规划/index.html","744eb36b40b146720e83de5fb93a5095"],["/404.html","f62ad0c43c1d6039b3d689ede7152866"],["/archives/2024/02/index.html","92b73b9e31b5a2db087deb7754611290"],["/archives/2024/index.html","6a4a76295a6018d5cbacd355afdeb982"],["/archives/index.html","3474b467824fa8cb0dd50b1325c51eee"],["/categories/乱的/index.html","2751d794fc0854f39582c5da93138185"],["/categories/导航/index.html","a008e2f735d6afe22e28ac1f64d61a6f"],["/categories/科研/index.html","5f731f0217ec2c9c6530874249242138"],["/categories/规划/index.html","a32657f9764d5f86a8e5c38a84628738"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/arknights.css","5f687e393558bb569f1b0a2f114bec7f"],["/font/Bender.ttf","24948b7a4ff705c7f3555c479dfc2178"],["/font/BenderLight.ttf","9125035bcd9fe317e56c4ad7cd998a05"],["/img/Alipay.png","f57cbd462e623cd6e7c7439475394fe9"],["/img/WeChat.png","95e84026635aa885962057ec100a2daa"],["/img/bg.jpg","37579e219c1ea292fee4b52b21f85dd0"],["/img/bk.jpg","b7b367b22905c1a068ef497d993179f3"],["/img/bk10.jpg","6f745bc5f19dcacd772d385a5c2887e1"],["/img/bk11.jpg","1b9dbe17d993bb1e5e2aa2c943e6564b"],["/img/bk12.jpg","69ce9a789f1e6dd51b2af625b2127cdf"],["/img/bk13.jpg","7e7d3e1adf496ffc4b988ba383386505"],["/img/bk14.jpg","210df2799d08e4cb050496f976720655"],["/img/bk15.jpg","fd56c31d872083842db85006827898af"],["/img/bk16.jpg","019c7936349577cbe0b278d10e37badf"],["/img/bk2.jpg","84e698c966e4bf848e281b65b798545b"],["/img/bk3.jpg","ee17afa3318d1809c494bd4006a9dcdb"],["/img/bk4.jpg","8739089a8f8ab319eb611a29daecc7a6"],["/img/bk5.jpg","48974f8e384afa16a0197fabbf866769"],["/img/bk6.jpg","d04d73aba0a6e7b63d5701c691580a1e"],["/img/bk7.jpg","3a2160b7c08d1ab3bc7e942907831c44"],["/img/bk8.jpg","cce36531ccd70e2d3eea2d55a7a26a01"],["/img/bk9.jpg","92baa2b16c1e1fdf58ea173ceaa9770c"],["/img/faction/1.png","f1f62bc6f65a17acaeee289bbedb3142"],["/img/faction/2.png","a5c3c81f7762a6ad33972802a3e00718"],["/img/faction/3.png","4e9b4aece1273fc4a3c4d39ec11e9f0e"],["/img/faction/4.png","a533837cfdb29451db1ddd831034007a"],["/img/faction/5.png","18b2efa7c7d5d883763240ee4d1e6100"],["/img/pc-bg.jpg","ce6330fd7ed5725c77d8979b1e8834af"],["/index.html","4c04dba9df9986eed3f11168cfc68a66"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/arknights.js","5b55a2c194655581286bca4fb4bdf5be"],["/js/pjax.js","5887e3e481922f4f0504e471cb2027b5"],["/js/search.js","8ed99a5768d0c27a2f1eca2a559a5f74"],["/lib/encrypt/hbe.js","5ad41f4b0281cda59c07a47931fd9458"],["/lib/encrypt/hbe.style.css","3c4b31eff7e9ede32e57eeac274421ab"],["/lib/fontawesome/css/all.min.css","f151aecf7f6452a0430801d17a825236"],["/lib/fontawesome/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/lib/fontawesome/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/lib/fontawesome/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/lib/fontawesome/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/music/index.html","ff24590f09d29c89eff12b57a8af4d80"],["/sw-register.js","238cd566e1d395677d9c213758aed45f"],["/tags/low-light-image-enhancement/index.html","e01b9cffba272e1727ab9d8f84c4ba67"],["/tags/导航/index.html","5e87c0ee77033704fc43f44178374557"],["/tags/杂的/index.html","ac58ab5da7ab24bb051cadb76dea2b24"],["/tags/深度学习/index.html","68bc836a91d77d9159c64ea3ded9427b"],["/tags/笔记/index.html","56a9fcf35f6c3b4880f8d06713c85d26"],["/tags/规划/index.html","43405ad06a579247a3a04e1646f2b98f"],["/危机合约/index.html","1dcb2cac6399580425fe706310bd0caf"],["/简历/index.html","8c2fb8ac551d678c5e40a397525bc347"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
