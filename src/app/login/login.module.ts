import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ElModule } from 'element-angular';
import {FormsModule} from '@angular/forms';




import {loginRoutes} from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    FormsModule,CommonModule,RouterModule.forChild(loginRoutes),ElModule.forRoot()
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
