import { Component, OnInit } from '@angular/core';

import {GetDataService} from './../mz-common/server/get-data/get-data.service'


@Component({
  selector: 'app-mz-home',
  templateUrl: './mz-home.component.html',
  styleUrls: ['./mz-home.component.css']
})
export class MzHomeComponent implements OnInit {
  private loading:Boolean=true;
  private arrFlag:number;
  private ComePlayingData:Array<any>;
  private NowPlayingData:Array<any>;
  private scrollAdData:Array<any>;
  private data:string='data';

  constructor(private getData:GetDataService) { }

  ngOnInit() {
      // this.loading=false;
      this.arrFlag=0;
      let _this=this;
      //ComePlaying
      let promise = this.getData.getData(`http://localhost:3000/api/home/ComePlaying?page=1&count=5`);
      // 2、需要使用的时候在写一下代码
      promise.then(function(JSONData){
        _this.ComePlayingData=JSONData[_this.data].films;
        _this.arrFlag++;
        console.log('-----------------正在上映获取数据1---------------');
        console.log(_this.ComePlayingData);
    });





    //NowPlaying?
    promise = this.getData.getData(`http://localhost:3000/api/home/NowPlaying?page=1&count=5`);
    // 2、需要使用的时候在写一下代码
    promise.then(function(JSONData){
      _this.NowPlayingData=JSONData[_this.data].films;
      _this.arrFlag++;
      console.log('-----------------首页获取数据1---------------');
      console.log(_this.NowPlayingData);
    });





    //scrollAD
    promise = this.getData.getData('http://localhost:3000/api/home/scrollAD');
    promise.then(function(JSONData){
        _this.scrollAdData=JSONData[_this.data].billboards;
        _this.arrFlag++;
        console.log('-----------------获取数据1---------------');
        console.log(_this.scrollAdData);
    })
  };



  ngDoCheck(){
    if(this.arrFlag>=3){
      this.loading=false;
    }
  }

  

}
