import { Component, OnInit } from '@angular/core';
import { AbsentsService } from 'src/app/services/absents.service';

@Component({
  selector: 'app-absents',
  templateUrl: './absents.component.html',
  styleUrls: ['./absents.component.css']
})
export class AbsentsComponent implements OnInit {
absents!:any[];
absent!:any[];

searchTerm!:string;
  constructor( private service:AbsentsService) { }

  ngOnInit(): void {
   this.Absent();
  }
  Absent(){ 
    this.service.getAbsents().subscribe(
     { next :(data)=>{this.absents=data;
                       this.absent=this.absents;  },
       error :(err:any)=>{
         console.log(err)
        }
     }
    )
   }
  search(){ this.absents=this.absent.filter( v=>v.stagiaire.cin.includes(this.searchTerm));
   }

  Delete(id:number){
      this.service.delete(id).subscribe(
        { next :(data:any)=>{this.Absent();
          location.reload();},
          error:(err:any)=>{ 
            err.error[Object.keys(err.error)[0]];}
        } )
     }
   
}
