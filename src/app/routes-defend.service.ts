import { Injectable } from '@angular/core';
//引入路由守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Route } from '@angular/router/src/config';

@Injectable()
export class RoutesDefendService implements CanActivate{

  constructor(private router:Router) { }


  canActivate():boolean{
    console.log('路由守卫运行了')
    if(sessionStorage.getItem('userId')){
      return true;
    }else{
      this.router.navigateByUrl('login');
      return false
    }
  }

}
