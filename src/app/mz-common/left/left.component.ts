import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

import {PassIdService} from './../server/transmit-id/pass-id.service';
import {LftFalgService} from './../server/lft-falg.service'

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  animations:[
    trigger("leftnav",[
      state('show',style({'right':'30%'})),
  		state('hide',style({'right':'100%'})),
  		transition('*=>*',animate(500))
    ]),
    trigger('leftnavouter',[
  		state('show1',style({'display':'block','background':'rgba(0,0,0,0.3)'})),
  		state('hide1',style({'display':'none','background':'rgba(0,0,0,0)'})),
  		transition('*=>*',animate(500))
  	])
  ]
})
export class LeftComponent implements OnInit {
  private type:Boolean=false;
  private leftnav:string;
  private leftnavouter:string;
  constructor(private getLeftFlag:LftFalgService,private passData:PassIdService) { }


  ngOnInit() {
    
  }

  ngDoCheck(){
    console.log('999');
    this.type = this.getLeftFlag.getLeftFlag();
    if(this.type){
      this.leftnav = 'show';
      this.leftnavouter = 'show1';

    }else{
      this.leftnav = 'hide';
      this.leftnavouter = 'hide1';
    }
  };
  change(){
    this.getLeftFlag.setLeftFlag();
    this.passData.setHeadTitle('全部影院');
  }

}
