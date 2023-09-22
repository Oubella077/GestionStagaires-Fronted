import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Components/Models/Stagiaire';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  access_token: any;
  isAuthanticated: boolean = false;
  username: any;
  roles: any;
  user: User = {} as User;
  constructor(private http: HttpClient,private router:Router) { }

  public auth(p: User): Observable<any> {
    let head = { headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") }
    let parm = new HttpParams()
               .set("username", p.username)
               .set("password", p.password)
    return this.http.post<any>("http://localhost:8080/login", parm, head)
  }

  loadeprofile() {
    // localStorage.setItem('access_token',JSON.stringify(data));
    console.log(" My data *********************")
    this.access_token = localStorage.getItem('access_token');
    console.log(this.access_token + " My data *********************")
    let jwtdecode: any = jwtDecode(this.access_token);
    this.user.username = jwtdecode.sub;
    this.user.roles = jwtdecode.scope;
    this.user.isAuthanticated = true;
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log(this.access_token + "*****" + this.username + "*****" + this.roles)
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.clear();
    this.user != undefined;
    this.router.navigateByUrl('/login');
  }
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
    // return this.user.isAuthanticated;
  }

}
// {headers:new HttpHeaders({ Authorization:'Bearer ' +this.service.Kc.token}) })
