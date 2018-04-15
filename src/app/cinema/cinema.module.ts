import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router"; 
import {mzCinemaRouts} from './cinemaRoutes';

import { CinemaComponent } from './cinema.component';
// import { TopComponent } from './top/top.component';
// import { GoodListComponent } from './good-list/good-list.component';
import { ListComponent } from './list/list.component';
import { SliceStrPipe } from './pipes/slice-str/slice-str';
import { CinemaListComponent } from './cinema-list/cinema-list.component';



@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(mzCinemaRouts)
  ],
  declarations: [CinemaComponent, ListComponent, SliceStrPipe, CinemaListComponent]
})
export class CinemaModule { }
