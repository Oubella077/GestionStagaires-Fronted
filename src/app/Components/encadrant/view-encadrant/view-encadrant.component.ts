import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-encadrant',
  templateUrl: './view-encadrant.component.html',
  styleUrls: ['./view-encadrant.component.css']
})
export class ViewEncadrantComponent implements OnInit {
@Input() p:any;
  constructor() { }

  ngOnInit(): void {
  }

}
