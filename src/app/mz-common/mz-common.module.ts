import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"; 

import { ElModule } from 'element-angular';


import {mzCommonRouts} from './mzCommon.routes'
import { MzCommonComponent } from './mz-common.component';
// import { HeadComponent } from './head/head.component';
// import { LeftComponent } from './left/left.component';
import { GoodListComponent } from './list/good-list/good-list.component';



@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(mzCommonRouts),ElModule.forRoot()
  ],
  declarations: [MzCommonComponent, GoodListComponent],
  // providers:[LftFalgService]
  
  
})
export class MzCommonModule { }
