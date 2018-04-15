import { Component, OnInit } from '@angular/core';

import {LftFalgService} from'./../server/lft-falg.service'

import {PassIdService} from './../server/transmit-id/pass-id.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  private headTitle:string;
  constructor(private setLeftFlag:LftFalgService,private passData:PassIdService) { }

  ngOnInit() {
    this.headTitle=this.passData.getHeadTitle();
    console.log(this.headTitle);
  }
  change(){
    this.setLeftFlag.setLeftFlag();
  }

}
