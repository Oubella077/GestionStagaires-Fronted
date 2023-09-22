import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StageService } from 'src/app/services/stage.service';
import { Stage } from '../Models/Stagiaire';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
@Output() Data=new EventEmitter()
  stages!: Stage[];
  stage!: Stage[];
  searchTerm!:string;
  st!: Stage;
  
  constructor(private service:StageService) { }

  ngOnInit(): void {
   this.getStage();
  }
 

  getStage(){
    this.service.getstage().subscribe(
      { 
       next :(data:any)=>{this.stages=data;
                          this.stage=data;
        console.log(data); },
       error:(err:any)=>{ console.error(err)}
      }
    )
   } 
  search(){
     this.stages=this.stage.filter(s=>s.sujet.includes(this.searchTerm)); 
   }
  selecte(S:Stage){
     this.st=S;
  }
  delete(id:number){
     this.service.deleteStage(id).subscribe({
     next:(data)=>{
      alert("Stage Deleted Successefully");
      this.getStage();
      location.reload;
  }
   })
  }
}
