import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-view-stagiaire',
  templateUrl: './view-stagiaire.component.html',
  styleUrls: ['./view-stagiaire.component.css']
})
export class ViewStagiaireComponent implements OnInit {
 p:any;
 @ViewChild('contenttt',{static:false}) el!: ElementRef
  workspaceService: any;

  constructor() { }

  ngOnInit(): void {
    this.p=history.state.data;
  }

}
