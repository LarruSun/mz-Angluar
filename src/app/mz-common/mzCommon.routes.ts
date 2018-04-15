import {RouterModule} from '@angular/router';

import {MzCommonComponent} from './mz-common.component';
import {GoodListComponent} from './list/good-list/good-list.component';


export const mzCommonRouts=[
    
    {path:'',redirectTo:'goodlist',pathMatch:'full'},    
    {path:'goodlist',component:GoodListComponent}

]