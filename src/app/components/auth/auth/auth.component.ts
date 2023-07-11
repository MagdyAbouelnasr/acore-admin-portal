import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signedUpUsers: any[] = [];
  canNotAccess = false

  signingObj:any = {
    email: '',
    password: ''
  }

  constructor(private router:Router){}
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signedUpUsers = JSON.parse(localData)
    }
  }

  onLogin(){
    const isUserExist = this.signedUpUsers.find(m => m.email == this.signingObj.email && m.password == this.signingObj.password);
    if(isUserExist != undefined){
      this.router.navigate(['home']);
    }else{
      this.canNotAccess = true
    }
  }

  onSignUp(){
    this.signedUpUsers.push(this.signingObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signedUpUsers));
    this.signingObj = {
      email: '',
      password: ''
    }
    this.router.navigate(['home']);
  }

}
