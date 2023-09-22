import { Component, OnInit } from '@angular/core';
import {  Stagiaire } from '../../Models/Stagiaire';
import {  Router } from '@angular/router';
import { StageService } from 'src/app/services/stage.service';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-edit-stagiaire',
  templateUrl: './edit-stagiaire.component.html',
  styleUrls: ['./edit-stagiaire.component.css']
})
export class EditStagiaireComponent implements OnInit {
S!:Stagiaire;
stage!:any[];
  constructor(private router:Router,private active:StageService,private service:StagiaireService) { }
  ngOnInit(): void { 
   this.S= history.state.data;
   this.getStage();
   console.log(this.S);
  }
  Savestagiaire(){
    this.S.idstage=3;
    this.S.idencadrent=3;
   this.service.editestagiaire(this.S,this.S.id).subscribe(
     {
       next: (data: any) => { console.log(this.S)
           alert("Stagiaire Edited")},
       error: (err: any) => { console.log(err) }
     })} 
  getStage() {
    this.active.getstage().subscribe(
      {  next: (data: any) => {
         this.stage = data;
         console.log(data);
        },
        error: (err: any) => { console.error(err) }
      }
    )
  }
}
