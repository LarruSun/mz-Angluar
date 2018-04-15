import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular';

import {RouterModule} from "@angular/router"; 



import {mzHomeRoutes} from './mzHome.routes';
import { MzHomeComponent } from './mz-home.component';
import { ScrollAdComponent } from './scroll-ad/scroll-ad.component';
// import { GoodListComponent } from './good-list/good-list.component';
import { IsPlayingComponent } from './is-playing/is-playing.component';
import { ComingPlayComponent } from './coming-play/coming-play.component';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(mzHomeRoutes),ElModule.forRoot()
  ],
  declarations: [ScrollAdComponent,MzHomeComponent, IsPlayingComponent, ComingPlayComponent],
})
export class MzHomeModule { }
