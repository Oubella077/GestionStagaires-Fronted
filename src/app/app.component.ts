import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionStagiaires';
  showNav:boolean=false;
  constructor(public service:AuthService,private router:Router) { }

ngOnInit(): void { }

  handellogout(){ 
    this.service.logout();
   
  }

}
