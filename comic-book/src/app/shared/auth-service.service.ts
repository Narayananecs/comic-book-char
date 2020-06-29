import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router : Router) { }

  isLoggedin : boolean = false;


  login() {
    this.isLoggedin = true;
    this.router.navigate(['characters']);
    localStorage.setItem("isLoggedin", "true")
  }

  logout() {
    this.isLoggedin = false;
    this.router.navigate(['/']);
    localStorage.setItem("isLoggedin", "false")
  }

  isAuthenticated() {
    const promise = new Promise((resolve,reject) => {
      const authStatus = localStorage.getItem('isLoggedin')
      resolve(authStatus);
    })
    return promise;
  }
}
