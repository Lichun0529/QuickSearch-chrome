import http from './http'
export default{
    getSearchsuggest(params,engineName){//联想词
        // if(engineName=='Google')return http.axios.jsonp('http://google.com/complete/search?output=toolbar&q=%'+params,'callback')//谷歌
        if(engineName=='淘宝'||engineName=='京东'){//淘宝&京东
            // return http.axios.jsonp('https://suggest.taobao.com/sug?area=etao&code=utf-8&q=' + params,'callback')//本地调试使用jsonp
            return http.axios.get('https://suggest.taobao.com/sug?area=etao&code=utf-8&q=' + params,'callback')//chrome调试使用get
        }else if(engineName=='bilibili'){//B站
            return http.axios.get('https://s.search.bilibili.com/main/suggest?func=suggest&term='+params,'func')
        }else if(engineName=='百度地图'){//百度地图
            // return  $.ajax({ //本地调试使用jsonp
            //     url: 'https://map.baidu.com/su?wd='+params+'&cid=131&type=0&newmap=1&b=(12897798.56%2C4795363.47%3B12961478.56%2C4855331.47)&t=1589372260584&pc_ver=2', 
            //     type: 'GET', 
            //     dataType: 'JSONP', 
            // })
            //chrome调试使用get
            return http.axios.get('https://map.baidu.com/su?wd='+params+'&cid=131&type=0&newmap=1&b=(12897798.56%2C4795363.47%3B12961478.56%2C4855331.47)&t=1589372260584&pc_ver=2','func')
        }else{//百度
            return http.axios.get('https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=' + params,'cb')
            // return  $.ajax({ //本地调试使用jsonp
            //     url: 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=1' + params, 
            //     type: 'GET', 
            // })
        }
	},
}
