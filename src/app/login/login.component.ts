import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GetDataService} from './../mz-common/server/get-data/get-data.service';

import { ElMessageService } from 'element-angular'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private authCode:Array<any>;//所有的验证码
  private sureAuthCode:string;//正确的验证码
  // private authShow:Boolean;//
  private userID:number;//用户名
  private pass:any;//用户输入的验证码(密码)
  private isSelect:Array<Boolean>;//判断字是选中还是取消状态
  //属性的定义
  private totleCode:string='totleCode';
  private sureCode:string='sureCode';
  private toggle:string='toggle';

  constructor(private router:Router,private sendAuto:GetDataService,private message: ElMessageService,) { }

  ngOnInit() {
    // this.authCode=['房','间','看','空','房','间','看','空','房','间','看','空','房','间','看','空'];
    this.isSelect=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    this.pass='';
  };
  login(){
    let promise = this.sendAuto.getData(`http://localhost:3000/api/login?userId=${this.userID}&&loginCode=${this.pass}`);
    let _this=this;
    // 2、需要使用的时候在写一下代码
    promise.then(function(JSONData){
        // _this.authCode=JSONData;
        console.log('----------------登陆验证---------------');
        console.log(JSONData);
        if(JSONData==-1){
          alert('请先发送验证');
          return;
        };
        if(JSONData==0){
          alert('验证码错误');
          return;
        };
        //sessionStorage单页面,不可跨页面,一般用cookies
        sessionStorage.setItem('userId','1');
        _this.router.navigateByUrl('person');
        alert('登陆成功');
            // _this.message[_this.success]('这是一条消息提示: ' )

    })
  };
  sendAuthCode(){
    let promise = this.sendAuto.getData(`http://localhost:3000/api/sendAuthCode?userId=${this.userID}`);
    let _this=this;
    this.pass='';
    for(var i=0;i<this.isSelect.length;i++){
      this.isSelect[i]=false
    }
    // 2、需要使用的时候在写一下代码
    promise.then(function(JSONData){
      _this.authCode=JSONData[_this.totleCode];
      
      let re=new RegExp(/,/g);//创建正则表达式对象
      _this.sureAuthCode=JSONData[_this.sureCode].toString().replace(re,"");


      console.log(_this.authCode);
      console.log(_this.sureAuthCode);
      console.log('----------------获取验证码---------------');

      var box =document.getElementById('cards');
      console.log(box);
      box[_this.toggle]=true;

    })
  };


  handle(done: Function): void {
    done()
  };
  selectAuth(item,index){
    console.log(index);
    this.isSelect[index]=!this.isSelect[index];
    console.log(this.isSelect[index]);
    if(this.isSelect[index]){
        this.pass+=item;
    }else{
      this.pass = this.pass.replace(new RegExp(item), "");
    }
  }
}
