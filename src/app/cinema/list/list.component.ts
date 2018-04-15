import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

import {GetDataService} from './../../mz-common/server/get-data/get-data.service';
import {PassIdService} from './../../mz-common/server/transmit-id/pass-id.service'





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @Input() myData:Array<any>; 


  private titles:Array<any>;
  private myData:Array<any>;
  private data:string='data';
  private filtData:Array<any>;
  private flagArr:Array<Boolean>;
  
  constructor(private getData:GetDataService,private router:Router,private setId:PassIdService) { }

  ngOnInit() {
    this.titles=['南山区','福田区','龙岗区','宝安区','坪山新区','光明新区','龙华新区','罗湖区','盐田区'];
    this.filtData=[[],[],[],[],[],[],[],[],[]]
    this.flagArr=[false,false,false,false,false,false,false,false,true];



    let promise = this.getData.getData(`http://localhost:3000/api/cinema`);
    let _this=this;
    // 2、需要使用的时候在写一下代码
    promise.then(function(JSONData){
      _this.myData=JSONData[_this.data].cinemas;
      console.log('----------------电影院获取数据---------------');
      // console.log(_this.myData);
      for(let i=0;i<_this.myData.length;i++){
        for(let j=0;j<_this.titles.length;j++){
          if(_this.myData[i].district.name==_this.titles[j]){
            _this.filtData[j].push(_this.myData[i]);
          }
        }
      }

    })
  };
  selectAdde(index){
    this.flagArr[index]=!this.flagArr[index];
  };
  setIds(id){
    this.setId.setListId(id);
    // this.router.navigateByUrl('cinemalist');
  }


}
