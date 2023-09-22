import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbsentsService } from 'src/app/services/absents.service';
import { Absent } from '../../Models/Stagiaire';

@Component({
  selector: 'app-edite-absent',
  templateUrl: './edite-absent.component.html',
  styleUrls: ['./edite-absent.component.css']
})
export class EditeAbsentComponent implements OnInit {
  justifyFormGroup!: FormGroup;
  @Input() Data: Absent[] = [];
  stagiaireId!:number;
  constructor(private service: AbsentsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.justifyFormGroup = this.fb.group(
      {
        cin: this.fb.control(null, Validators.required),
        date_fin: this.fb.control(null, Validators.required),
        justification: this.fb.control(null, Validators.required),
      })
  }
  justifier() {
    let L = this.justifyFormGroup.value;
    this.Search();
    this.service.jutification(L, this.stagiaireId).subscribe(
      {
        next: (data) => {
          console.log("Absence Justifier");
          location.reload();
        },
        error: (err: any) => {
          console.log(err)
        }
      })
  }

  Search() {
    let e: any = this.Data?.find(e => e.stagiaire.cin == this.justifyFormGroup.value.cin);
    this.stagiaireId = e?.id;
    console.log("Id stagiaire = " + e?.id);
    console.log("hellllll  " + this.justifyFormGroup.value.cin);
  }
}
