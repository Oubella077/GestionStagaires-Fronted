import { Component, OnInit } from '@angular/core';
import { Stage } from '../../Models/Stagiaire';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {
S:Stage={
  id: 0,
  sujet:"",
  date_debut:new Date(),
  date_fin:new Date()
};
  constructor(private service:StageService) { }

  ngOnInit(): void {
  }
  addstage(){ 
    this.service.addStage(this.S).subscribe({
      next:(data)=>{
       alert("Stage added Successefully");
       
       location.reload();
   }
  })
}
}