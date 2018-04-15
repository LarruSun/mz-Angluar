import { Component, OnInit } from '@angular/core';
import {GetDataService} from './../../mz-common/server/get-data/get-data.service';
import {PassIdService} from './../../mz-common/server/transmit-id/pass-id.service'
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {
  private myData:object;
  private data:string='data';
  private services:string='services';
  private description:string='description';
  private listId:number;
  private title:Array<any>;
  private infor:string;
  constructor(private getData:GetDataService,private getId:PassIdService) { }

  ngOnInit() {
    this.listId=this.getId.getListId();
    this.myData={
      address:'',
      services:'',
      telephones:'',
    }
    this.title=[
        {"name":"取票","isSelect":false,type:1,class:'iconfont icon-icon_ticket icon'},
        {"name":"3D","isSelect":false,type:3,class:'iconfont icon-yingyuanxinxi3dyanjing icon'},
        {"name":"停车","isSelect":false,type:2,class:'iconfont icon-jiaotongleitingchechang icon'},
        {"name":"优惠","isSelect":false,type:4,class:'iconfont icon-lipin icon'},
        {"name":"交通","isSelect":false,type:'',class:'iconfont icon-jiaotong icon'}
      ];
    // this.listId=203;
    console.log(`http://localhost:3000/api/cinemaList?listId=${this.listId}`);
    let promise = this.getData.getData(`http://localhost:3000/api/cinemaList?listId=${this.listId}`);
    let _this=this;
    // 2、需要使用的时候在写一下代码
    promise.then(function(JSONData){
      _this.myData=JSONData[_this.data].cinema
      console.log('----------------电影院获取数据---------------');
      console.log(_this.myData)
      _this.selectSP(0);
    })
  };
  selectSP(index){
    for(let i in this.title){
      if(i==index){
        this.title[i].isSelect=true;
      }else{
        this.title[i].isSelect=false;
      }
    }

    this.infor='';
    let arr=this.myData[this.services];
    let obj={name:'',server:null};
    
    if(index==4){
        obj.server=[];
        for(let item of arr){
          if(item.type>=5){
            obj.name='交通';
            obj.server.push(item);
          }
        }
        if(!obj.server.length){
          this.infor='暂无信息';
          return;
        }
        for(let item of obj.server){
          this.infor+=item.description;
        }
        return;
    }



    for(let item of arr){
      if(item.name==(this.title[index].name)){
        obj.name=item.name;
        obj.server=item;
        break;
      }
    };
    if(obj.server==null){
      this.infor='暂无信息';
    }else{
      this.infor=obj.server[this.description]
    };
 





  }

}
