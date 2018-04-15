import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router"; 
import {personRoutes} from './person.routes'
import { PersonComponent } from './person.component';




@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(personRoutes)
  ],
  declarations: [PersonComponent]
})
export class PersonModule { }
