//引入系统的路由的模块
import {RouterModule} from '@angular/router';

import {CinemaComponent} from './cinema.component';
import {CinemaListComponent} from './cinema-list/cinema-list.component';
import {ListComponent} from './list/list.component';

export const mzCinemaRouts=[
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:ListComponent},
    {path:'list/cinemalist',component:CinemaListComponent}
        
    
]