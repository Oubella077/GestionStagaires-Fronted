import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stagiaire } from '../Components/Models/Stagiaire';
@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  constructor(private http:HttpClient){}
  
host =environment.host;

public getCustomers():Observable<any[]> {  
  // let head={headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")}
  return this.http.get<any[]>(this.host + "/Stagiaires/Liste");}

public deletestagiaire(id:number) {  
  return this.http.delete(this.host + "/Stagiaires/delete/"+id);}

public savestagiaire(St:Stagiaire):Observable<Stagiaire>{
  return this.http.post<Stagiaire>(this.host + "/Stagiaires/create",St)}

public editestagiaire(St:Stagiaire,id:number):Observable<Stagiaire>{
  return this.http.put<Stagiaire>(this.host + "/Stagiaires/update/"+id,St)}
}
