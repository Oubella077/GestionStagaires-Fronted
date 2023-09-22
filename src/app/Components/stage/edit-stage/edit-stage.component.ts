import { Component, Input, OnInit } from '@angular/core';
import { Stage } from '../../Models/Stagiaire';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-edit-stage',
  templateUrl: './edit-stage.component.html',
  styleUrls: ['./edit-stage.component.css']
})
export class EditStageComponent implements OnInit {
 @Input() S!:Stage;
  constructor(private service:StageService) { }

  ngOnInit(): void {
  }

saveStage(){ 
  this.service.editeStage(this.S,this.S.id).subscribe(
    {next:(data:Stage)=> {alert("Stage Info Saved Successefully") },
     error:(err)=> {console.log("Error" + err) }
  }
  )
}
}
