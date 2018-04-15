import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {

  constructor() { }
  getData(url){
    var xhr = new XMLHttpRequest();
    xhr.open('get',url);
    xhr.send();
    //使用promise对异步请求进行回调处理
    var promise = new Promise(function(resolve,reject){
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status===200){
                //将获取到的数据,转换成json对象
                var dataObj = JSON.parse(xhr.responseText);
                resolve(dataObj);
            }
        }
    })
    return promise;  
}

}
