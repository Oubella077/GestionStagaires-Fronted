import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stage } from '../Components/Models/Stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StageService {
host=environment.host;
  constructor(private http:HttpClient) { }


 public getstage():Observable<any[]>{
   return this.http.get<any>( this.host + "/Stage/Liste");
  }
 public addStage(S:Stage):Observable<Stage>{
    return this.http.post<Stage>( this.host + "/Stage/create",S);

 }
 public editeStage(stage:Stage,id:number):Observable<Stage>{
  return this.http.put<Stage>(this.host + "/Stage/update/"+id,stage);
  }
  public deleteStage(id:number){
    return this.http.delete(this.host + "/Stage/delete/"+id);
    }
 
}
