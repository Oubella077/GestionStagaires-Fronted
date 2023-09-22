import { Component,  OnInit} from '@angular/core';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { Stagiaire } from '../Models/Stagiaire';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { timeEnd } from 'console';


@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
 stagiaires!:Stagiaire[];
 stagiaire!:Stagiaire[];
 stages: any;
 searchTerm!:string;
  alert: boolean=false;

 constructor(private service:StagiaireService,private router:Router) { }

  ngOnInit(): void {
   this.getStagiaires();
  }
  // @HostListener('click')
  // onClick(): void {
  //   this.navigation.back();
  // }

getStagiaires(){
    this.service.getCustomers().subscribe(
      { 
       next :(data)=>{this.stagiaires=data;
        this.stagiaire =data;
        console.log(data); },
       error:(err:any)=>{ console.error(err)}
      }
    )
   }

Deletestagiaire(id:number){
    this.service.deletestagiaire(id).subscribe(
      { next :(data:any)=>{this.getStagiaires(); },
        error:(err:any)=>{ 
          this.alert=true; 
          setTimeout(()=>{                           // <<<---using ()=> syntax
            this.alert = false;
        }, 1500);
        }})}

search(){
  this.stagiaires=this.stagiaire.filter( v=>v.cin.includes(this.searchTerm));}
 

}