import moment from "moment"

export function formatDate(date, format = 'YYYY-MM-DD hh:mm:ss') {
    return moment(new Date(date)).format(format);
}

export function transformUnits(value) {
    let unit = (value.match(/[a-zA-Z]/g) || []).join("");
    let val = value.replace(unit, "");
    let res = "";
    switch (unit) {
        case "Ki":
            res = val * Math.pow(2, 10);
            break;
        case "Mi":
            res = val * Math.pow(2, 20);
            break;
        case "Gi":
            res = val * Math.pow(2, 30);
            break;
        case "Ti":
            res = val * Math.pow(2, 40);
            break;
        case "Pi":
            res = val * Math.pow(2, 50);
            break;
        case "Ei":
            res = val * Math.pow(2, 60);
            break;
        case "n":
            res = val * Math.pow(10, -9);
            break;
        case "u":
            res = val * Math.pow(10, -6);
            break;
        case "m":
            res = val * Math.pow(10, -3);
            break;
        case "K":
            res = val * Math.pow(10, 3);
            break;
        case "M":
            res = val * Math.pow(10, 6);
            break;
        case "G":
            res = val * Math.pow(10, 9);
            break;
        case "T":
            res = val * Math.pow(10, 12);
            break;
        case "P":
            res = val * Math.pow(10, 15);
            break;
        case "E":
            res = val * Math.pow(10, 18);
            break;
        default:
            res = Number(value);
    }
    return res;
}

// 数值格式化显示
export function formatData(val)  {
    function del0 (data){
      if(data.endsWith('.000')){
        return data.replace('.000','')
      }else{
        return data.replace(/0+$/,"")
      }
    }
    if(val > 1000 && val < 1000000) {
      let data = (val/1000).toFixed(3)
      return del0(data)+'k';
    } else if(val >= 1000000 ){
      let data = (val/1000000).toFixed(3)
      return del0(data)+'M';
    } else {
      let data = Number(val).toFixed(3)
      return del0(data);
    }
  }
/*
* cookie操作- get
* */
export function getCookie(name ) {
    // let cookies = getCookies();=
    let pattern = new RegExp(`(?:(?:^|.*;\\s*)${name}\\s*\\=\\s*([^;]*).*$)|^.*$`);
    let cookies =document.cookie.replace(pattern, "$1");
    return cookies || '';
}



export function fullScreen(el) {
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

    //typeof rfs != "undefined" && rfs
    if (rfs) {
        rfs.call(el);
    }
    else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

export function exitScreen(){
    var el = document;
    var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;

    //typeof cfs != "undefined" && cfs
    if (cfs) {
        cfs.call(el);
    }
    else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

export function getLanguage(fallbackLng = 'zh-CN') {
    let lang = fallbackLng;
    let query = window.location.href
    // 先检查url参数，再检查是否有localStorage,没有的话检查浏览器默认语言，再没有使用默认
    let locale = query.match(/locale=([\w-]+)(&|$)/)
    if(locale && locale[1] ){
        lang = locale[1].replace('_','-')
    }else if(localStorage.getItem('locale')){
        lang = localStorage.getItem('locale')
    }else if(getCookie('iot_locale')){
        lang = getCookie('iot_locale')
    }else{
        lang = navigator.language
        switch(lang){
            case 'zh':
                lang = 'zh-CN'
                break
            case 'en':
                lang = 'en-US'
                break
            default:
                break
        }

    }
    if(!['zh-CN','zh-TW','en-US'].includes(lang)){
        lang = fallbackLng
    }
    return lang
}


function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export function getCode() {
    let code = '';
    for (var i = 0; i < 6; i++) {
        var type = getRandom(1, 3);
        switch (type) {
            case 1:
                code += String.fromCharCode(getRandom(48, 57));//数字
                break;
            case 2:
                code += String.fromCharCode(getRandom(65, 90));//大写字母
                break;
            case 3:
                code += String.fromCharCode(getRandom(97, 122));//小写字母
                break;
        }
    }
    return code;
}

export function isQiankun() {
	return window.__POWERED_BY_QIANKUN__ || (window.cubeConfig && window.cubeConfig.cloud) || false;
}

