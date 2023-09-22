import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncadrantService } from 'src/app/services/encadrant.service';
import { DivisionComponent } from '../../division/division.component';
import { DivisionService } from 'src/app/services/division.service';
import { Division, Encadrant } from '../../Models/Stagiaire';

@Component({
  selector: 'app-add-encadrant',
  templateUrl: './add-encadrant.component.html',
  styleUrls: ['./add-encadrant.component.css']
})
export class AddEncadrantComponent implements OnInit {
  EncadrantFormGroup!: FormGroup;
  encadrent: any;
  Divisions!: Division[];
  idDivision!: number;
  constructor(private service: EncadrantService, private service1: DivisionService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.EncadrantFormGroup = this.fb.group(
      {
        nom: this.fb.control(null, Validators.required),
        prenom: this.fb.control(null, Validators.required),
        email: this.fb.control(null, [Validators.required, Validators.email]),
        cin: this.fb.control(null, Validators.required),
        tel: this.fb.control(null, Validators.required),
        division: this.fb.control(null, Validators.required),
        
      }
    )
    this.getDivisions();
  }
  SaveEncadrent() {
    let E:Encadrant= this.EncadrantFormGroup.value;
    E.idDivision=this.idDivision;
    this.service.addEncadrant(E).subscribe(
      {
        next: (data: any) => {
          alert("Encadrant Saved Succefully");
          console.log(data);
        },
        error: (err: any) => { console.error(err) }
      }
    )
  }
  getDivisions() {
    this.service1.getallDivision().subscribe(
      {
        next:(data:Division[]) => {
           this.Divisions = data;
          
          console.log(data);
        },
        error: (err: any) => { console.error(err) }
      }
    )
  }                     
  select(event:any) {
   this.idDivision=event.target.value;
   console.log(this.idDivision);
   }

}
