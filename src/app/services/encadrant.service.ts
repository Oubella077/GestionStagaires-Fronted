import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncadrantService {
  host=environment.host;
 

  constructor(private http:HttpClient) { }


  public getEncadrant():Observable<any>{
    return this.http.get<any>( this.host +  "/Encadrent/Liste");
   }

   public deleteEncadrent(id:number){
    return this.http.delete<any>(this.host + "/Encadrent/delete/"+id );
    }

    public addEncadrant(encadrant:any) { 
      return this.http.post<any>(this.host+"/Encadrent/create",encadrant);
    }
}
