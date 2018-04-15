import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router"; 

import {mzFilmRouts} from './mzFilmRoutes';
// import {PassIdService} from './server/pass-id/pass-id.service'

import { MzFilmComponent } from './mz-film.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoodListComponent } from './isPlaying/good-list.component';
import { ComingPlayComponent } from './coming-play/coming-play.component';
import { ChangeDataPipe } from './coming-play/change-data.pipe';
// import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(mzFilmRouts)
  ],
  declarations: [MzFilmComponent, NavBarComponent, GoodListComponent, ComingPlayComponent, ChangeDataPipe],
  providers:[]
})
export class MzFilmModule { }
