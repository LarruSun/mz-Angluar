import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { ElModule } from 'element-angular'
import 'element-angular/theme/index.css'



import {RouterModule} from "@angular/router"; 
import {appRoutes} from './app.routes';


import {LftFalgService} from './mz-common/server/lft-falg.service';
import {GetDataService} from './mz-common/server/get-data/get-data.service';
import {PassIdService} from './mz-common/server/transmit-id/pass-id.service';
import  {RoutesDefendService} from './routes-defend.service';
// import {MzHomeModule} from './mz-home/mz-home.module'


import { AppComponent } from './app.component';
import {HeadComponent} from './mz-common/head/head.component'
import {LeftComponent} from './mz-common/left/left.component'








// import {MzHomeComponent} from './mz-home/mz-home.component'


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftComponent,
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,RouterModule.forRoot(appRoutes),ElModule.forRoot()
  ],
  providers: [RoutesDefendService,LftFalgService,GetDataService,PassIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
