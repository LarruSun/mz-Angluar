//引入系统的路由的模块
import {RouterModule} from '@angular/router';


//定义路由表
export const appRoutes=[
    {path:'',redirectTo:'home',pathMatch:'full'},    
    {path:'home',loadChildren:'./mz-home/mz-home.module#MzHomeModule'},
    {path:'film',loadChildren:'./mz-film/mz-film.module#MzFilmModule'},
    {path:'cinema',loadChildren:'./cinema/cinema.module#CinemaModule'},
    {path:'person',loadChildren:'./person/person.module#PersonModule'},
    {path:'login',loadChildren:'./login/login.module#LoginModule'}
]