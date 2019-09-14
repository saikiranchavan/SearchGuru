import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(){
    console.log("iam here to see whether ur logged in");
    this.router.navigateByUrl('/login');
    return true;
  }
}
