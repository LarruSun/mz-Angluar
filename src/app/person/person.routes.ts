//引入系统的路由的模块
import {RouterModule} from '@angular/router';

import {RoutesDefendService} from './../routes-defend.service'

import {PersonComponent} from './person.component';


export const personRoutes=[
    {path:'',redirectTo:'person',pathMatch:'full'},
    {   
        path:'person',component:PersonComponent,
        canActivate:[RoutesDefendService]
    }


]