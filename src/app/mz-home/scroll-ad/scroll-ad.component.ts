import { Component, OnInit,Input} from '@angular/core';
declare var Swiper:any;
import {GetDataService} from './../../mz-common/server/get-data/get-data.service';


@Component({
  selector: 'app-scroll-ad',
  templateUrl: './scroll-ad.component.html',
  styleUrls: ['./scroll-ad.component.scss']
  // viewProviders:[GetDataService]
})
export class ScrollAdComponent implements OnInit {
  @Input() scrollAdData:Array<any>;
  constructor(private getData:GetDataService ) { }
  ngOnInit() {
      let swiper = new Swiper('.swiper-container',{
        loop:true,
        autoplay:1000,
        observer: true,//异步数据
      })
  }

}
