import { Component, OnInit } from '@angular/core';
import {GetDataService} from './../../mz-common/server/get-data/get-data.service';
import {PassIdService} from './../../mz-common/server/transmit-id/pass-id.service'
import {trigger,state,style,animate,transition} from '@angular/animations';


@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss'],
  animations:[
    trigger('returnTopBotton',[
      state('show',style({'bottom': '75px','right': '20%'})),
      state('hidden',style({'bottom': '-50px','right': '20%'})),
      transition('*=>*',animate(500))
    ])
  ]
})
export class GoodListComponent implements OnInit {
  private myData:Array<any>;
  private data:string='data';
  private showText:string='........数据加载中........';
  private isBotton:Boolean=false;
  private page:number=1;
  private show:Boolean=false;
  private loading:Boolean=true;
  private returnTopBotton:string


  constructor(private getData:GetDataService , private setListId:PassIdService) { }

  ngOnInit() {
    this.loading=true;
    this.myData=[];
    this.proGetData();
  };


  proGetData(){
    console.log('数据获取中!!!');
    let url=`http://localhost:3000/api/flim/NowPlaying?page=${this.page}&count=5`
    let promise = this.getData.getData(url);
    let _this=this;
      // 2、需要使用的时候在写一下代码
    promise.then(function(JSONData){
      let oData=JSONData[_this.data].films
      // _this.myData=JSONData[_this.data].films;
      _this.showText='........数据加载中........'
      if(oData.length==0){
        _this.showText='........我是有底线的..........'
        _this.isBotton=true;
        return false;
      };
    for(var i=0;i<oData.length;i++){
        _this.myData.push(oData[i]); 
    }
    _this.loading=false;
    console.log('------影院正在热映获取数据--------');
    console.log(_this.myData);
    return true;     
  })
  }

  srolls(){
    // console.log('滚动事件触发');
    // clearInterval(timer);

    let pageYOffset='pageYOffset';
    let bigBox=document.getElementById('mzFilmGoodList');
    let smallBox=document.getElementById('Ul');
    let scollHeight=bigBox[pageYOffset] || bigBox.scrollTop;//获取滚动高度(大盒子)
    if(scollHeight>100){this.returnTopBotton='show';}
    else {this.returnTopBotton='hidden';}
    let smallBoxHeight=smallBox.offsetHeight;//获取大盒子的高度
    let bigBoxHeight=bigBox.offsetHeight;//获取小盒子的高度
    // console.log(smallBoxHeight-bigBoxHeight+10)
    // console.log(scollHeight);
    let a =(smallBoxHeight-bigBoxHeight+10)-scollHeight
    
    if(a<=10 && !this.isBotton){
        this.page++;
        this.proGetData();
    }
    if((a<=150)){this.show=true;}
    else if(this.isBotton){ this.show=true;}
    else  {this.show=false};
  };


  setId(id){
    this.setListId.setListId(id)
  };
  hiddenReturnTopButton(){
    this.setScrollY();
  };

  setScrollY(){
    clearInterval(timer);

    var box=document.getElementById('mzFilmGoodList');
    var pageYOffset='pageYOffset';
    var height=parseInt(box[pageYOffset] || box.scrollTop);
    
    var timer =setInterval(function(){
        height-=50;
        if(height<0){
          clearInterval(timer);
          box.scrollTop  = 0;
          return;
        }
        box.scrollTop  = height;
    },1)
  }

}
