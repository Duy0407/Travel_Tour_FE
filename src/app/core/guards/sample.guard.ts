import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SampleGuard implements  CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['dashboard/tour']);
      return false;
    }else{
      // this.router.navigate(['login']);
      return true;
    }


  }
}
