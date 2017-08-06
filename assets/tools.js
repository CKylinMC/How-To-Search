//From Bilibili | parse httpget params
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        try {
            return decodeURIComponent(r[2]);
        } catch (e) {
            return null;
        }
    }
    return null;
}

function getSearchString(s) {
    switch (s) {
        case 'i':
        case 'bi':
        case 'bing':
            return 'bing';
            break;
        case 'g':
        case 'gg':
        case 'google':
            return 'google';
            break;
        case 'b':
        case 'bd':
        case 'baidu':
        default:
            return 'baidu';
            break;
    }
}

function getSearch(s) {
    if (!s || s == "baidu") {
        return '百度';
    } else if (s == "bing") {
        return '必应';
    } else if (s == "google") {
        return '谷歌';
    } else {
        return '百度';
    }
}

function getSearchLink(s) {
    if (!s || s == "baidu") {
        return 'baidu.com';
    } else if (s == "bing") {
        return 'bing.com';
    } else if (s == "google") {
        return 'google.com.hk';
    } else {
        return 'baidu.com';
    }
}

function getSearchSLink(s) {
    if (!s || s == "baidu") {
        return 'https://www.baidu.com/s?wd=';
    } else if (s == "bing") {
        return 'https://www.bing.com/search?q=';
    } else if (s == "google") {
        return 'https://www.google.com.hk/search?&q=';
    } else {
        return 'https://www.baidu.com/s?wd=';
    }
}

var images = new Array()

function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}

function generate(display = true) {
    var baseLink = location.href;
    var se = document.getElementById('input-se').value;
    var kwd = document.getElementById('input-key').value;
    se = getSearchString(se);
    if (!kwd) {
        if (display) dialoger('需要填写搜索关键字', "关键字不能为空");
        return false;
    } else {
        var param = "?s=" + se + "&wd=" + encodeURI(kwd);
        var link = baseLink + param;
        if (display) dialoger('<input readonly>' + link + '</input><br>', "生成的地址");
        document.getElementById('res-lnk').value = link;
        document.getElementById('res-lnky').value = link;
        document.getElementById('res-kwd').innerHTML = filterXSS(kwd);
        document.getElementById('guide-result').style.display = '';
        return link;
    }
}

function previewit() {
    var link = generate(false);
    if (!link) {
        dialoger('需要填写搜索关键字', "关键字不能为空");
    } else {
        open(link);
    }
}
