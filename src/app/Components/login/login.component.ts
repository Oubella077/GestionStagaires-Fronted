import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../Models/Stagiaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!:FormGroup;
  showNav:boolean=true;
  user!:User;
  accesstoken: any;
  constructor(private service:AuthService, private fb:FormBuilder,private router :Router) { }

  ngOnInit(): void {
    this.loginFormGroup=this.fb.group(
       {username: this.fb.control(null,Validators.required),
        password: this.fb.control(null,Validators.required), }
    )
  }
  login(){
     this.user=this.loginFormGroup.value;
     this.service.auth(this.user).subscribe(
      { 
        next: (data: any) => {
          this.accesstoken = data;
          localStorage.setItem('access_token', JSON.stringify(data));         
          console.log(this.accesstoken);
          this.router.navigateByUrl("/");
        },
        error: (err: any) => { console.error(err) }
      })} 
      
      
      
}
