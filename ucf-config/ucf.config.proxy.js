/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-07-21 14:00:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-22 16:32:07
 */

let k3sDevelop = 'http://iot-develop.10.16.226.192.xip.io'
let k3sTest = 'http://iot-test.10.16.226.192.xip.io'
let iotcloud = 'https://iot.yyuap.com'
let serverUrl = iotcloud;

let proxy = {
    //简单写法
    '/locale': `${k3sTest}`,
    '/core-metadata': {
        pathRewrite: {
                    '^/core-metadata': '/iotweb/core-metadata/',
                },
                url: k3sDevelop
    },
}

function formatUcfProxy(proxy) {
    let ucfProxy = []

    for (let route in proxy) {
        let base = {
            enable: true,
            // headers: {
            //   Referer: refererUrl,
            //      "Cookie": "iot_access_token=Bearer+eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDgxOTc2MjIsImlhdCI6MTYwODE5MDQyMiwibmJmIjoxNjA4MTkwNDIyLCJzdWIiOiI2ZDI0ZjViMi1iYTZiLTQyYTYtYjc3NS04ZDdmMjA2ZmM3ZmFAd2ViIn0.mmUJDrv8Q-IvebQVhrcy-D9-i0nfJ6lTVh2pxS5egw14eDXd3X32wkegTbMmF2KWFLEUo19mVgFaTNq1nuUKAA"
            // },
            router: [route],
        }
        if (typeof proxy[route] === 'string') {
            ucfProxy.push({
                ...base,
                url: proxy[route],
            })
        } else {
            ucfProxy.push({
                ...base,
                ...proxy[route],
            })
        }
    }

    return ucfProxy
}

module.exports = formatUcfProxy(proxy)
