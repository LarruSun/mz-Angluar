//引入系统的路由的模块
import {RouterModule} from '@angular/router';

import {MzHomeComponent} from './mz-home.component';


export const mzHomeRoutes=[

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:MzHomeComponent},
    {path:'home/isPlaying',loadChildren:'./../mz-common/mz-common.module#MzCommonModule'},            
    {path:'home/comingPlay',loadChildren:'./../mz-common/mz-common.module#MzCommonModule'}            
    
]