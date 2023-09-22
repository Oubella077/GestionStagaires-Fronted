import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { Stagiaire } from '../../Models/Stagiaire';
import { StageService } from 'src/app/services/stage.service';
import { EncadrantService } from 'src/app/services/encadrant.service';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css']
})
export class AddStagiaireComponent implements OnInit {
  stagiaireFormGroup!: FormGroup;
  stages!: any[];
  encadrent!: any[];
  St!: Stagiaire;
  Dd!: Date;
  DF!: String;
  stageid!: number;
  Encaid!:number;
  @Input() Stages: any[] = [];
  constructor(private service: StagiaireService,
    private fb: FormBuilder, private service2: StageService, private service3: EncadrantService) { }

  ngOnInit(): void {
    this.stagiaireFormGroup = this.fb.group(
      {
        nom: this.fb.control(null, Validators.required),
        prenom: this.fb.control(null, Validators.required),
        email: this.fb.control(null, [Validators.required, Validators.email]),
        cin: this.fb.control(null, Validators.required),
        tel: this.fb.control(null, Validators.required),
        etablissment: this.fb.control(null, Validators.required),
        date: this.fb.control(null, Validators.required),
 }
    )
    this.getStage();
    this.getEncadrent();
  }

  Savestagiaire() {
     this.St = this.stagiaireFormGroup.value;
     this.St.idstage=this.stageid;
     this.St.idencadrent=this.Encaid;
    this.service.savestagiaire(this.St).subscribe(
      {
        next: (data: any) => { console.log(this.St)},
        error: (err: any) => { console.log(err) }
      }
    )
  }

  getStage() {
    this.service2.getstage().subscribe(
      {
        next: (data: any) => {
          this.stages = data;
          console.log(data);
        },
        error: (err: any) => { console.error(err) }
      }
    )
  }
  getEncadrent() {
    this.service3.getEncadrant().subscribe(
      { next: (data: any) => {
          this.encadrent = data;
          console.log(data);
        },
        error: (err: any) => { console.error(err) }
      }
    )
  }

  selectedstage(event: any) {
    this.stageid = event.target.value;
    console.log(this.stagiaireFormGroup.value.sujet)
    let date = this.stages.find(s => s.id = this.stageid);
    this.Dd = date.date_debut;
    this.DF = date.date_fin;
  }

  selectedEnc(event: any) {
    this.Encaid = event.target.value;
    console.log( this.Encaid+" Encadrent id" +this.stagiaireFormGroup.value.sujet)
  }

}
