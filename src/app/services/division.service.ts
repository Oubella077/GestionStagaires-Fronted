import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Division } from '../Components/Models/Stagiaire';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
host=environment.host;

constructor(private http:HttpClient) { }
  
  
getallDivision():Observable<Division[]>{
   return this.http.get<Division[]>(this.host+ "/Division/Liste" );
   }

}
