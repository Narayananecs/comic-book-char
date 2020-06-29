import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../shared/auth-service.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthServiceService) { }
  loginForm : FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup ( {
      'userName' : new FormControl("",[Validators.required,Validators.email]),
      'password' : new FormControl('',[Validators.required])
    })
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
