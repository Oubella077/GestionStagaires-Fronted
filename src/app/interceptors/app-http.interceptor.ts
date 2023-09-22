import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  access_token:any;
  constructor(private auth:AuthService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //  if( this.auth.isLoggedIn()){
  //   console.log("******* hhhhhhhhhhhhhhh******");
  //   console.log("******* hhhhhhhhhhhhhhh******" +this.access_token['access-Token']);
  // }    
   this.access_token=JSON.parse(localStorage.getItem("access_token")!);
    if(!request.url.includes("/login")){
      request = request.clone({
        headers: request.headers.set('Authorization' ,'Bearer ' +this.access_token['access-Token'])                           
         }) 
    return next.handle(request).pipe(
      catchError((Err:HttpErrorResponse)=> {
        if(Err.status === 401  ){
          this.auth.logout();
        }
        return throwError(Err.message);
         }    )
    );
  }
  else
  return next.handle(request);
}     
}
