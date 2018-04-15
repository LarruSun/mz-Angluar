//引入系统的路由的模块
import {RouterModule} from '@angular/router';

import {MzFilmComponent} from './mz-film.component';
import {GoodListComponent} from './isPlaying/good-list.component';
import {ComingPlayComponent} from './coming-play/coming-play.component';
// import {ListComponent} from './list/list.component';
 


export const mzFilmRouts=[
    {path:'',redirectTo:'goodlist',pathMatch:'full'},

    {
        path:'',component:MzFilmComponent,
        children:[
            {path:'',component:GoodListComponent},
            {path:'goodlist',component:GoodListComponent},
            {path:'comingplay',component:ComingPlayComponent},            
            // {path:'goodlist/list',component:ListComponent},            
            // {path:'comingplay/list',component:ListComponent},            
            {path:'comingplay/list',loadChildren:'./../mz-common/mz-common.module#MzCommonModule'},            
            {path:'goodlist/list',loadChildren:'./../mz-common/mz-common.module#MzCommonModule'}            
        ]

    }
]