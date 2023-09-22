import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Stagiaire } from '../Models/Stagiaire';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {
 
@Input() stagiaire!:any;

@ViewChild('content',{static:false}) el!: ElementRef
  constructor() { }

ngOnInit(): void {}
   
  
onConfirm() {
  let pdf=new jsPDF('p', 'mm', [900, 980]);
  pdf.html(this.el.nativeElement,{ 
    callback:(pdf)=>{ 
      pdf.save("attestation.pdf")
    }
  })
}
}
