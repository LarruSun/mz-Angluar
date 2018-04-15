import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Location} from '@angular/common';//Params用于传参 Location用于返回上一页 router用于返回首页


import {PassIdService} from './../../server/transmit-id/pass-id.service'

import {GetDataService} from './../../server/get-data/get-data.service'

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {
  private listId :number;
  private loading:Boolean=true;
  private data:string='data';


  private myData:Object;
  private actors:Array<any>;
  private imgUrl:string;

  constructor(private getListId:PassIdService,private getData:GetDataService) { }

  ngOnInit() {
    // console.log('asdasd');
    this.myData={
      "cover":{"origin":""},
      "director":"",
      "actors":"",
      "nation":"",
      "language":"",
      "category":"",
      "premiereAt":"",
      "synopsis":""
    };

    this.listId=this.getListId.getListId()
    // this.listId=4136;
    
    // 2、需要使用的时候在写一下代码
    let promise = this.getData.getData(`http://localhost:3000/api/flim/List?id=${this.listId}`);
    let _this=this;
    promise.then(function(JSONData){
        // console.log(JSONData);
        _this.myData=JSONData[_this.data].film;
        _this.loading=false;
        console.log('-----------------获取数据---------------');
        console.log(_this.myData);
    })

  }


}
