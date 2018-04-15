import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router'

import {GetDataService} from './../../mz-common/server/get-data/get-data.service'
import {PassIdService} from './../../mz-common/server/transmit-id/pass-id.service'

@Component({
  selector: 'app-is-playing',
  templateUrl: './is-playing.component.html',
  styleUrls: ['./is-playing.component.scss']
})
export class IsPlayingComponent implements OnInit {
  @Input() NowPlayingData:Array<any>
  private data:string='data';
  constructor(private getData:GetDataService,private setListId:PassIdService,private router:Router) { }

  ngOnInit() {

  };
  setId(id){
    this.setListId.setListId(id)
  };
  more(){
    this.router.navigateByUrl('/film')
  }

}
