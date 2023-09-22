import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absent } from '../Components/Models/Stagiaire';

@Injectable({
  providedIn: 'root'
})
export class AbsentsService {

  constructor(private http:HttpClient) { }
host=environment.host;
  

  public saveAbsent(absent:Absent,id:number):Observable<Absent>{ 
    return this.http.post<Absent>(this.host +"/Absent/create/"+id ,absent);
  }
  public getAbsents():Observable<any[]>{ 
    return this.http.get<any[]> (this.host +"/Absent/Liste" );
  }
  public jutification(absent:Absent,Id:number):Observable<Absent> { 
    return this.http.put<Absent>(this.host +"/Absent/update/"+ Id,absent)
   }

  public delete(Id:number) { 
    return this.http.delete(this.host +"/Absent/delete/"+ Id)
   }
}
