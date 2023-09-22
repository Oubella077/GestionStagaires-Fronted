import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { AbsentsService } from 'src/app/services/absents.service';
import { Absent, Stagiaire } from '../../Models/Stagiaire';

@Component({
  selector: 'app-add-absent',
  templateUrl: './add-absent.component.html',
  styleUrls: ['./add-absent.component.css']
})
export class AddAbsentComponent implements OnInit {
  absentFormGroup!:FormGroup;
 @Input() Data:any[]=[];
  stagiaireId: any;
  constructor(private service:AbsentsService,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.absentFormGroup= this.fb.group(
       { cin:this.fb.control(null,Validators.required) , 
        date_debut:this.fb.control(null,Validators.required) , 
          dateFN:this.fb.control(null,Validators.required) , 
        } )   
        console.log("hellllll Data  "+ this.Data);
 
        this.Search();  
  }
  SaveAbsent(){ 
       let absent:Absent=this.absentFormGroup.value;
       this.Search();
       this.service.saveAbsent(absent,this.stagiaireId).subscribe(
        { next :(data)=>{ alert("le stagiaire est marquer absent" ) },
          error :(err)=>{
            console.log(err)
           }
        })}
  Search(){ 
    let e:any=this.Data?.find(e=>e.cin==this.absentFormGroup.value.cin);
    
    this.stagiaireId=e?.id;
           console.log(" id stagiaire = "+e?.id);
            console.log("hellllll  "+this.absentFormGroup.value.cin);}
    
}
