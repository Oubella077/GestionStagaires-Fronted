import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  access_token:any;

  constructor(public service:AuthService) { }


  ngOnInit(): void {
    this.access_token=localStorage.getItem('access_token');
    if (this.access_token !== undefined)
     this.service.loadeprofile();
   
  }

}
