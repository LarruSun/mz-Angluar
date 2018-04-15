//引入系统的路由的模块
import {RouterModule} from '@angular/router';


import {LoginComponent} from './login.component';



export const loginRoutes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent}

]