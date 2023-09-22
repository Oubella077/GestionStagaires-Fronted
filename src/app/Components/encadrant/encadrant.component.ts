import { Component, HostListener, OnInit } from '@angular/core';
import { EncadrantService } from 'src/app/services/encadrant.service';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css']
})
export class EncadrantComponent implements OnInit {
  messageerorr!: string;
  endcadrents: any[] = [];
  searchTerm: string = "";
  endcadrent: any[] = [];
  enca: any;
  constructor(private service: EncadrantService) { }
  ngOnInit(): void {
    this.getEncadrents();
  }
  
  
  getEncadrents() {
    this.service.getEncadrant().subscribe(
      {
        next: (data) => {
          this.endcadrents = data;
          this.endcadrent = this.endcadrents;
        },
        error: (err) => { this.messageerorr = err }
      }
    )
  }
  search() {
     this.endcadrents = this.endcadrent.filter(e=>e.cin.includes(this.searchTerm)) }

  delete(id: number) {
    this.service.deleteEncadrent(id).subscribe(
      {
        next: (data) => { this.getEncadrents();
                          location.reload; },
        error: (err)=>{ }
      }
    )
  }
  selecte(item: any) {
    this.enca = item;
  }


}
