import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  disablle:boolean=true;
  disablle2:boolean=false;

  disabllle: any;
  constructor(private router:Router) {}

  ngOnInit(): void {
   
  }
  disable(){
    this.disablle=false;
    this.disablle2=true;
   }
  disable2(event:any){ 
    this.disabllle=event.target?.val;
    this.disablle=event.target?.val;

   }

}
